import { useGithubContext } from "../../hooks/useGithubContext";
import { rollups, mean } from "d3";
import { Bar } from "../Charts/Bar";
import type { pullsDetailReposResponse } from "../../context/context";
// import { dateDiffInHours } from "../../utils/dateDiffInHours";
import { eachHourOfInterval, parseISO } from "date-fns";
import { format as d3Format } from "d3";
import useMeasure from "react-use-measure";
const formatNumber = d3Format(".1f");

// const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");

const getPullSize = (pull: pullsDetailReposResponse["data"]) => {
  const modifiedLines = pull.reduce((acc, item) => {
    const { additions, deletions } = item;
    acc = acc + additions + deletions;
    return acc;
  }, 0);
  if (modifiedLines <= 100) return "small";
  if (modifiedLines > 100 && modifiedLines <= 1000) return "medium";
  if (modifiedLines > 1000) return "large";
  return "small";
};
interface FormattedPull {
  created_at: Date | null;
  closed_at: Date | null;
  merged_at: Date | null;
  merged_time: number | null;
  size: string;
}
export interface AveragePullBySizeObj {
  size: string;
  value: number;
}
export interface TotalPullsBySize {
  small?: number;
  medium?: number;
  large?: number;
}

const AverageMergeTimePRSize = () => {
  const [ref, bounds] = useMeasure();
  const { pulls, pullsDetail } = useGithubContext();
  if (!pulls || !pullsDetail || pulls?.length === 0) return null;
  const pullSize = pullsDetail.map((el) => getPullSize(el));
  const formattedPulls: FormattedPull[] = pulls.map((el, index) => {
    const created_at = parseISO(el.created_at);
    const closed_at = el.closed_at ? parseISO(el.closed_at) : null;
    const merged_at = el.merged_at ? parseISO(el.merged_at) : null;
    return {
      created_at,
      closed_at,
      merged_at,
      // merged_time: el.merged_at ? dateDiffInHours(created_at, merged_at) : null,
      merged_time: merged_at
        ? eachHourOfInterval({ start: created_at, end: merged_at }).length
        : null,
      size: pullSize[index],
    };
  });
  // console.log("PullsDetails - Size", pulls);
  const totalPullsBySize = formattedPulls.reduce(
    (acc: TotalPullsBySize, item) => {
      const { size, merged_time } = item;
      if (!merged_time) return acc;
      if (!acc[size as keyof TotalPullsBySize]) {
        acc[size as keyof TotalPullsBySize] = 1;
      } else {
        acc[size as keyof TotalPullsBySize] =
          (acc[size as keyof TotalPullsBySize] ?? 0) + 1;
      }
      return acc;
    },
    {}
  );
  const averagePullsBySize = rollups(
    formattedPulls,
    (v) => mean(v, (d) => d.merged_time) ?? null,
    (d) => d.size
  );

  const averagePullBySizeObj = averagePullsBySize.reduce(
    (acc: AveragePullBySizeObj[], item) => {
      const [size, value] = item;
      if (value === null) return acc;
      else {
        acc = [...acc, { size, value: +formatNumber(value) }];
        return acc;
      }
    },
    []
  );
  const noMergeData = averagePullsBySize.every((el) => el[1] === null);

  return (
    <section className="w-full " ref={ref}>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow">
        <div className="px-4 py-4 sm:px-6 font-light text-sm dark:text-gray-200">
          Average Merge Time by Pull Request Size
        </div>
        {!noMergeData && pulls && pullSize && bounds.width > 0 && (
          <Bar
            data={averagePullBySizeObj}
            totalPullsBySize={totalPullsBySize}
            width={bounds.width}
            height={0.48 * bounds.width}
          />
        )}{" "}
      </div>
    </section>
  );
};

export default AverageMergeTimePRSize;
