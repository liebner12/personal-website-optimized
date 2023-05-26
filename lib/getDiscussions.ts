import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

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

export const getDiscussions = async (): Promise<
  MappedDiscussion[] | undefined
> => {
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

    return mappedDiscussions;
  } catch (e: unknown) {
    return undefined;
  }
};
