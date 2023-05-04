import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';

// Define the type for the reaction node
type ReactionNode = {
  content: string;
  user: {
    login: string;
  };
};

// Define the type for the discussion node
type DiscussionNode = {
  id: string;
  title: string;
  comments: {
    totalCount: number;
  };
  reactions: {
    nodes: ReactionNode[];
  };
};

// Define the type for the data returned by the GraphQL query
type Data = {
  repository: {
    discussions: {
      nodes: DiscussionNode[];
    };
  };
};

export type MappedDiscussion = {
  title: string;
  numberOfComments: number;
};

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // Replace this with your GraphQL API token
  },
});

// Define the GraphQL query to fetch the number of comments and all reactions for each discussion
const GET_DISCUSSIONS = gql`
  query GetDiscussions($repoOwner: String!, $repoName: String!) {
    repository(owner: $repoOwner, name: $repoName) {
      discussions(first: 8) {
        nodes {
          title
          comments {
            totalCount
          }
        }
      }
    }
  }
`;

// Export a default function as the request handler with types for req and res
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MappedDiscussion[] | string | unknown>
) {
  // Check the request method
  if (req.method === 'GET') {
    // Fetch data from the GraphQL API using ApolloClient
    const { data } = await client.query<Data>({
      query: GET_DISCUSSIONS,
      variables: {
        repoOwner: 'liebner12',
        repoName: 'personal-website',
      },
    });

    // Send back the data as JSON response with status code 200
    try {
      const mappedDiscussions = data.repository.discussions.nodes.map(
        ({ title, comments }) => ({
          title,
          numberOfComments: comments.totalCount,
        })
      );

      res.status(200).json(mappedDiscussions);
    } catch (e: unknown) {
      res.status(400).json(e);
    }
  } else {
    // Handle any other HTTP method
    res.status(405).send('Method Not Allowed');
  }
}
