import type { UserDataI } from '@/shared/api/types';

export interface UsersSearchRequestPayload {
  limit: number;
  skip: number;
  total: number;
  users: UserDataI[] | [];
}

export enum Actions {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  APPEND_SUCCESS = 'APPEND_SUCCESS',
  FAILURE = 'FAILURE',
}

interface RequestAction {
  type: Actions.REQUEST;
  payload: boolean;
}

interface SuccessAction {
  type: Actions.SUCCESS;
  payload: {
    data: UsersSearchRequestPayload;
    searchUser: string | null | undefined;
  };
}

interface AppendSuccessAction {
  type: Actions.APPEND_SUCCESS;
  payload: UsersSearchRequestPayload;
}

interface FailureAction {
  type: Actions.FAILURE;
  error: Error;
}

export type Action =
  | RequestAction
  | SuccessAction
  | AppendSuccessAction
  | FailureAction;

export interface createSearchUsersUrl {
  searchUser?: string | undefined | null;
  limit?: number;
  select?: string[];
  skip?: number;
}

export interface fetchUsersArgs extends createSearchUsersUrl {
  append: boolean;
}

export interface UsersContextI {
  loading: boolean;
  total: number;
  error?: Error | null;
  users: UserDataI[] | null;
  lastSearchRequest: string | undefined | null;
  fetchUsers: ({ searchUser, limit, select }: fetchUsersArgs) => void;
}
