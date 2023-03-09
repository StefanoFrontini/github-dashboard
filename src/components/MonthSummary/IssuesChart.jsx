import { useGithubContext } from "../../context/context";
import { timeParse, timeFormat } from "d3";
import { Line } from "../Charts/Line";

const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");
const formatTime = timeFormat("%B %d, %Y");
const parseDate2 = timeParse("%B %d, %Y");

const IssuesChart = () => {
  let { issues } = useGithubContext();
  let issuesDistribution = issues.reduce((acc, item) => {
    let { closed_at, created_at } = item;
    closed_at ? (closed_at = formatTime(parseDate(closed_at))) : null;
    created_at ? (created_at = formatTime(parseDate(created_at))) : null;
    if (closed_at) {
      if (!acc[closed_at]) {
        acc[closed_at] = {
          date: parseDate2(closed_at),
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
          date: parseDate2(created_at),
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
  issuesDistribution = Object.values(issuesDistribution).sort(
    (a, b) => a.date - b.date
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
  issuesDistribution = [issuesDistributionCreated, issuesDistributionClosed];
  return (
    <>
      {issuesDistribution.length ? (
        <Line title="Issues" data={issuesDistribution} />
      ) : null}
    </>
  );
};

export default IssuesChart;
