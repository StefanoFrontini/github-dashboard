import React, { ReactNode } from "react";
import type { Endpoints } from "@octokit/types";
// import { timeParse } from "d3";
import { getContext } from "../hooks/useGithubContext";
import useFetchData from "../hooks/useFetchData";

// const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");

export type listIssuesReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];
export type listPullsReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/pulls"]["response"];
export type pullsDetailReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"]["response"];

interface ErrorType {
  show: boolean;
  msg?: string;
}

export interface GithubContextType {
  issues: listIssuesReposResponse["data"];
  pulls: listPullsReposResponse["data"];
  pullsDetail: pullsDetailReposResponse["data"][];
  isLoading: boolean;
  error: ErrorType;
  checkRequests: (repo: string, owner: string) => Promise<void>;
}
interface Props {
  children?: ReactNode;
}
const GithubContext = React.createContext<GithubContextType | undefined>(
  undefined
);

const GithubProvider: React.FC<Props> = ({ children }) => {
  const { issues, pulls, pullsDetail, error, checkRequests } = useFetchData();
  const isLoading = true;
  return (
    <GithubContext.Provider
      value={{
        issues,
        pulls,
        pullsDetail,
        error,
        isLoading,
        // handleChangeRepoOwner,
        checkRequests,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

getContext(GithubContext);

export { GithubProvider };
