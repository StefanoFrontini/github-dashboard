import { format, parseISO, parse } from "date-fns";
import { listIssuesReposResponse } from "../../context/context";

interface Issue {
  date: Date;
  closed_at: number;
  created_at: number;
}

export interface IssuesAggregation {
  [key: string]: Issue;
}

export const issuesDistributions = (
  issues: listIssuesReposResponse["data"]
) => {
  const issuesAggregation = issues.reduce((acc: IssuesAggregation, item) => {
    let { closed_at, created_at } = item;
    closed_at
      ? (closed_at = format(parseISO(closed_at), "MMM dd, yyyy"))
      : null;
    created_at
      ? (created_at = format(parseISO(created_at), "MMM dd, yyyy"))
      : null;
    if (closed_at) {
      if (!acc[closed_at]) {
        acc[closed_at] = {
          date: parse(closed_at, "MMM dd, yyyy", new Date()),
          closed_at: 1,
          created_at: 0,
        };
      } else {
        acc[closed_at] = {
          ...acc[closed_at],
          closed_at: acc[closed_at].closed_at + 1,
        };
      }
    }
    if (created_at) {
      if (!acc[created_at]) {
        acc[created_at] = {
          date: parse(created_at, "MMM dd, yyyy", new Date()),
          closed_at: 0,
          created_at: 1,
        };
      } else {
        acc[created_at] = {
          ...acc[created_at],
          created_at: acc[created_at].created_at + 1,
        };
      }
    }

    return acc;
  }, {});

  const issuesDistribution = Object.values(issuesAggregation).sort(
    (a, b) => +a.date - +b.date
  );

  const issuesDistributionCreated = {
    name: "Opened",
    values: issuesDistribution.map((el) => {
      return {
        date: el.date,
        value: el.created_at,
      };
    }),
  };

  const issuesDistributionClosed = {
    name: "Closed",
    values: issuesDistribution.map((el) => {
      return {
        date: el.date,
        value: el.closed_at,
      };
    }),
  };

  // dummy data for Framer Motion animation
  const issuesDistributionMerged = {
    name: "Merged",
    values: issuesDistribution.map((el) => {
      return {
        date: el.date,
        value: el.closed_at,
      };
    }),
  };
  return [
    issuesDistributionMerged,
    issuesDistributionCreated,
    issuesDistributionClosed,
  ];
};
