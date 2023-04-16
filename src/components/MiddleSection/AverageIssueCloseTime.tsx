import { useGithubContext } from "../../context/context";
import { timeParse } from "d3";
import { dateDiffInHours } from "../../utils/dateDiffInHours";
import { hoursToDhms } from "../../utils/secondsToDhms";

const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");

interface FormattedIssues {
  created_at: Date | null;
  closed_at: Date | null;
  closed_time: number | null;
}

const AverageIssueCloseTime = () => {
  const { issues } = useGithubContext();
  const formattedIssues: FormattedIssues[] = issues.map((el) => {
    const created_at = parseDate(el.created_at);
    const closed_at = el.closed_at ? parseDate(el.closed_at) : null;
    return {
      created_at,
      closed_at,
      closed_time: el.closed_at ? dateDiffInHours(created_at, closed_at) : null,
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
      acc["closed_time"] = acc["closed_time"]! + item.closed_time!;
      acc["number"] = acc["number"]! + 1;
    }
    return acc;
  }, {});

  const averageClosedTime: number | null =
    closedTime.closed_time && closedTime.number
      ? closedTime.closed_time / +closedTime.number.toFixed(2)
      : null;

  return (
    <div className="flex-1  my-6 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-4 sm:px-6 text-sm font-light">
        Average Issue Close Time
      </div>
      <div className="px-4 py-14 text-5xl sm:text-6xl text-center ">
        {averageClosedTime
          ? hoursToDhms(averageClosedTime)
          : "No issues closed"}
      </div>
    </div>
  );
};

export default AverageIssueCloseTime;
