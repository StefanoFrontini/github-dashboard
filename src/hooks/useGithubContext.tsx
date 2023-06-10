import React from "react";
import type { GithubContextType } from "../context/context";

let context: React.Context<GithubContextType | undefined>;

export const getContext = (
  ctx: React.Context<GithubContextType | undefined>
) => {
  context = ctx;
};

export const useGithubContext = () => {
  const githubContext = React.useContext(context);
  if (!githubContext)
    throw new Error(
      "No DataContext.Provider found when calling useGithubContext."
    );
  return githubContext;
};
