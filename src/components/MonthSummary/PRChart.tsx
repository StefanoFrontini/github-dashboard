import { useGithubContext } from "../../context/context";
import { timeParse, timeFormat } from "d3";
import { Line } from "../Charts/Line";

const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");
const formatTime = timeFormat("%B %d, %Y");
const parseDate2 = timeParse("%B %d, %Y");

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
    merged_at ? (merged_at = formatTime(parseDate(merged_at)!)) : null;
    closed_at ? (closed_at = formatTime(parseDate(closed_at)!)) : null;
    created_at ? (created_at = formatTime(parseDate(created_at)!)) : null;
    if (merged_at) {
      if (!acc[merged_at]) {
        acc[merged_at] = {
          date: parseDate2(merged_at)!,
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
          date: parseDate2(closed_at)!,
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
          date: parseDate2(created_at)!,
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
  interface PullsDistributions {
    name: string;
    values: {
      date: Date;
      value: number;
    }[];
  }
  [];

  return (
    <>
      {pulls.length ? (
        <Line title="Pull Requests" data={pullsDistributions} />
      ) : null}
    </>
  );
};

export default PRChart;
