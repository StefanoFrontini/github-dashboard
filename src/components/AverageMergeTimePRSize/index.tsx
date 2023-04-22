import { useGithubContext } from "../../context/context";
import { timeParse, rollups, mean } from "d3";
import { Bar } from "../Charts/Bar";
import type { pullsDetailReposResponse } from "../../context/context";
import { dateDiffInHours } from "../../utils/dateDiffInHours";

const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");

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
  const { pulls, pullsDetail } = useGithubContext();
  const pullSize = pullsDetail.map((el) => getPullSize(el));
  const formattedPulls: FormattedPull[] = pulls.map((el, index) => {
    const created_at = parseDate(el.created_at);
    const closed_at = el.closed_at ? parseDate(el.closed_at) : null;
    const merged_at = el.merged_at ? parseDate(el.merged_at) : null;
    return {
      created_at,
      closed_at,
      merged_at,
      merged_time: el.merged_at ? dateDiffInHours(created_at, merged_at) : null,
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
          acc[size as keyof TotalPullsBySize]! + 1;
      }
      return acc;
    },
    {}
  );
  // console.log("formattedPulls", formattedPulls);
  // console.log("totalPullsBySize", totalPullsBySize);
  const averagePullsBySize = rollups(
    formattedPulls,
    (v) =>
      mean(v, (d) => d.merged_time)
        ? +mean(v, (d) => d.merged_time)!.toFixed(2)
        : null,
    (d) => d.size
  );
  const averagePullBySizeObj = averagePullsBySize.reduce(
    (acc: AveragePullBySizeObj[], item) => {
      const [size, value] = item;
      if (value === null) return acc;
      else {
        acc = [...acc, { size, value }];
        return acc;
      }
    },
    []
  );
  const noMergeData = averagePullsBySize.every((el) => el[1] === null);

  return (
    <section className="w-full bg-white">
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-4 sm:px-6 font-light text-sm">
          Average Merge Time by Pull Request Size
        </div>
        {!noMergeData && pulls && pullSize && (
          <Bar
            data={averagePullBySizeObj}
            totalPullsBySize={totalPullsBySize}
          />
        )}{" "}
      </div>
    </section>
  );
};

export default AverageMergeTimePRSize;
