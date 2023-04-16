import { useGithubContext } from "../../context/context";
import { timeParse } from "d3";
import { dateDiffInHours } from "../../utils/dateDiffInHours";
import { hoursToDhms } from "../../utils/secondsToDhms";

const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");

interface FormattedPulls {
  created_at: Date | null;
  closed_at: Date | null;
  merged_at: Date | null;
  merged_time: number | null;
}

const AveragePRMergeTime = () => {
  const { pulls } = useGithubContext();
  const formattedPulls: FormattedPulls[] = pulls.map((el) => {
    const created_at = parseDate(el.created_at);
    const closed_at = el.closed_at ? parseDate(el.closed_at) : null;
    const merged_at = el.merged_at ? parseDate(el.merged_at) : null;
    return {
      created_at,
      closed_at,
      merged_at,
      merged_time: el.merged_at ? dateDiffInHours(created_at, merged_at) : null,
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
      acc["merged_time"] = acc["merged_time"]! + item.merged_time!;
      acc["number"] = acc["number"]! + 1;
    }
    return acc;
  }, {});

  const averageMergeTime: number | null =
    mergeTime && mergeTime.merged_time && mergeTime.number
      ? +(+mergeTime.merged_time / +mergeTime.number).toFixed(2)
      : null;

  return (
    <div className="mb-0 sm:mb-6 flex-1 my-6 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-4 sm:px-6 text-sm font-light">
        Average Pull Request Merge Time
      </div>
      <div className="px-4 py-14 text-5xl sm:text-6xl text-center">
        {averageMergeTime ? hoursToDhms(averageMergeTime) : "No pulls merged"}
      </div>
    </div>
  );
};

export default AveragePRMergeTime;
