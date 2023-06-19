import { useGithubContext } from "../../hooks/useGithubContext";
// import { dateDiffInHours } from "../../utils/dateDiffInHours";
import { hoursToDhms } from "../../utils/secondsToDhms";
import { eachHourOfInterval, parseISO } from "date-fns";

// const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");

interface FormattedPulls {
  created_at: Date | null;
  closed_at: Date | null;
  merged_at: Date | null;
  merged_time: number | null;
}

const AveragePRMergeTime = () => {
  const { pulls } = useGithubContext();
  const formattedPulls: FormattedPulls[] = pulls.map((el) => {
    const created_at = parseISO(el.created_at);
    const closed_at = el.closed_at ? parseISO(el.closed_at) : null;
    const merged_at = el.merged_at ? parseISO(el.merged_at) : null;
    return {
      created_at,
      closed_at,
      merged_at,
      merged_time: merged_at
        ? eachHourOfInterval({ start: created_at, end: merged_at }).length
        : null,
    };
  });
  interface MergeTime {
    merged_time?: number | null;
    number?: number | null;
  }
  const mergeTime = formattedPulls.reduce((acc: MergeTime, item) => {
    const { merged_time } = item;
    if (!merged_time) return acc;
    if (!acc["merged_time" as keyof MergeTime]) {
      acc["merged_time" as keyof MergeTime] = item.merged_time;
      acc["number" as keyof MergeTime] = 1;
    } else {
      acc["merged_time"] =
        (acc["merged_time"] ?? 0) + (item.merged_time ? item.merged_time : 0);
      acc["number"] = (acc["number"] ?? 0) + 1;
    }
    return acc;
  }, {});

  const averageMergeTime: number | null =
    mergeTime && mergeTime.merged_time && mergeTime.number
      ? +(+mergeTime.merged_time / +mergeTime.number).toFixed(2)
      : null;

  return (
    <div className="mb-0 sm:mb-6 flex-1 my-6 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-slate-800 dark:text-gray-200">
      <div className="px-4 py-4 sm:px-6 text-sm font-light">
        Average Pull Request Merge Time
      </div>
      <div className="px-4 py-14 text-5xl sm:text-6xl text-center dark:text-gray-200">
        {averageMergeTime
          ? hoursToDhms(averageMergeTime)
          : "No pulls merged for the last month"}
      </div>
    </div>
  );
};

export default AveragePRMergeTime;
