import { ParsedUrlQuery } from 'querystring';

export type children = { children: JSX.Element[] | JSX.Element };

export interface StaticParams extends ParsedUrlQuery {
  post: string;
}
