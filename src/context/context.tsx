import React, { ReactNode, useState } from "react";
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
  handleChangeRepoOwner: (repo: string, owner: string) => void;
}
interface Props {
  children?: ReactNode;
}
const GithubContext = React.createContext<GithubContextType | undefined>(
  undefined
);

const GithubProvider: React.FC<Props> = ({ children }) => {
  const [repo, setRepo] = useState("react");
  const [owner, setOwner] = useState("facebook");
  const { issues, pulls, pullsDetail, isLoading, error } = useFetchData(
    repo,
    owner
  );

  const handleChangeRepoOwner = (repo: string, owner: string) => {
    setRepo(repo);
    setOwner(owner);
  };

  return (
    <GithubContext.Provider
      value={{
        issues,
        pulls,
        pullsDetail,
        error,
        isLoading,
        handleChangeRepoOwner,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

getContext(GithubContext);

export { GithubProvider };
