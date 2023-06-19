import { useGithubContext } from "../../hooks/useGithubContext";
// import { timeParse } from "d3";
// import { dateDiffInHours } from "../../utils/dateDiffInHours";
import { hoursToDhms } from "../../utils/secondsToDhms";
import { eachHourOfInterval, parseISO } from "date-fns";

// const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");

interface FormattedIssues {
  created_at: Date | null;
  closed_at: Date | null;
  closed_time: number | null;
}

const AverageIssueCloseTime = () => {
  const { issues } = useGithubContext();
  const formattedIssues: FormattedIssues[] = issues.map((el) => {
    const created_at = parseISO(el.created_at);
    const closed_at = el.closed_at ? parseISO(el.closed_at) : null;
    return {
      created_at,
      closed_at,
      closed_time: closed_at
        ? eachHourOfInterval({ start: created_at, end: closed_at }).length
        : null,
    };
  });
  interface ClosedTime {
    closed_time?: number | null;
    number?: number | null;
  }

  const closedTime = formattedIssues.reduce((acc: ClosedTime, item) => {
    const { closed_time } = item;
    if (!closed_time) return acc;
    if (!acc["closed_time" as keyof ClosedTime]) {
      acc["closed_time" as keyof ClosedTime] = item.closed_time;
      acc["number"] = 1;
    } else {
      acc["closed_time"] =
        (acc["closed_time"] ?? 0) + (item.closed_time ? item.closed_time : 0);
      acc["number"] = (acc["number"] ?? 0) + 1;
    }
    return acc;
  }, {});

  const averageClosedTime: number | null =
    closedTime.closed_time && closedTime.number
      ? closedTime.closed_time / +closedTime.number.toFixed(2)
      : null;

  return (
    <div className="flex-1  my-6 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow dark:bg-slate-800 dark:divide-gray-700">
      <div className="px-4 py-4 sm:px-6 text-sm font-light dark:text-gray-200">
        Average Issue Close Time
      </div>
      <div className="px-4 py-14 text-5xl sm:text-6xl text-center dark:text-gray-200 ">
        {averageClosedTime
          ? hoursToDhms(averageClosedTime)
          : "No issues closed for the last month"}
      </div>
    </div>
  );
};

export default AverageIssueCloseTime;
