import { useGithubContext } from "../../context/hookContext";
// import { timeParse, timeFormat } from "d3";
import { Line } from "../Charts/Line";
import { format, parseISO, parse } from "date-fns";

// const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");
// const formatTime = timeFormat("%B %d, %Y");
// const parseDate2 = timeParse("%B %d, %Y");

interface Pull {
  date: Date;
  closed_at: number;
  created_at: number;
  merged_at: number;
}

export interface PullsAggregation {
  [key: string]: Pull;
}
const PRChart = () => {
  const { pulls } = useGithubContext();
  const pullsAggregation = pulls.reduce((acc: PullsAggregation, item) => {
    let { merged_at, closed_at, created_at } = item;
    merged_at
      ? (merged_at = format(parseISO(merged_at), "MMM dd, yyyy"))
      : null;
    closed_at
      ? (closed_at = format(parseISO(closed_at), "MMM dd, yyyy"))
      : null;
    created_at
      ? (created_at = format(parseISO(created_at), "MMM dd, yyyy"))
      : null;
    if (merged_at) {
      if (!acc[merged_at]) {
        acc[merged_at] = {
          date: parse(merged_at, "MMM dd, yyyy", new Date()),
          merged_at: 1,
          closed_at: 0,
          created_at: 0,
        };
      } else {
        acc[merged_at] = {
          ...acc[merged_at],
          merged_at: acc[merged_at].merged_at + 1,
        };
      }
    }
    if (closed_at) {
      if (!acc[closed_at]) {
        acc[closed_at] = {
          date: parse(closed_at, "MMM dd, yyyy", new Date()),
          merged_at: 0,
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
          merged_at: 0,
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

  const pullsDistribution = Object.values(pullsAggregation).sort(
    (a, b) => +a.date - +b.date
  );

  const pullsDistributionMerged = {
    name: "Merged",
    values: pullsDistribution.map((el) => {
      return {
        date: el.date,
        value: el.merged_at,
      };
    }),
  };
  const pullsDistributionCreated = {
    name: "Opened",
    values: pullsDistribution.map((el) => {
      return {
        date: el.date,
        value: el.created_at,
      };
    }),
  };
  const pullsDistributionClosed = {
    name: "Closed",
    values: pullsDistribution.map((el) => {
      return {
        date: el.date,
        value: el.closed_at,
      };
    }),
  };
  const pullsDistributions = [
    pullsDistributionMerged,
    pullsDistributionCreated,
    pullsDistributionClosed,
  ];
  // interface PullsDistributions {
  //   name: string;
  //   values: {
  //     date: Date;
  //     value: number;
  //   }[];
  // }
  // [];

  return (
    <>
      {pulls.length ? (
        <Line title="Pull Requests" data={pullsDistributions} />
      ) : null}
    </>
  );
};

export default PRChart;
