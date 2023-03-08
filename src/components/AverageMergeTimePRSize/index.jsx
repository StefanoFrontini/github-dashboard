import { useGithubContext } from "../../context/context";
import { timeParse, rollups, mean } from "d3";
import { Bar } from "../Charts/Bar";

const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");
const dateDiffInHours = (a, b) => {
  const ms_per_hour = 1000 * 60 * 60;
  // Discard the time and time-zone information.
  // const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  // const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return +((b - a) / ms_per_hour).toFixed(2);
};

const getPullSize = (pull) => {
  const modifiedLines = pull.reduce((acc, item) => {
    const { additions, deletions } = item;
    acc = acc + additions + deletions;
    return acc;
  }, 0);
  if (modifiedLines <= 100) return "small";
  if (modifiedLines > 100 && modifiedLines <= 1000) return "medium";
  if (modifiedLines > 1000) return "large";
};

const AverageMergeTimePRSize = () => {
  let { pulls, pullsDetail } = useGithubContext();
  console.log("AVTPRSize: ", pulls, pullsDetail);
  pullsDetail = pullsDetail?.map((el) => getPullSize(el));
  pulls = pulls.map((el, index) => {
    const created_at = parseDate(el.created_at);
    const closed_at = parseDate(el.closed_at);
    const merged_at = parseDate(el.merged_at);
    return {
      created_at,
      closed_at,
      merged_at,
      merged_time: el.merged_at ? dateDiffInHours(created_at, merged_at) : null,
      size: pullsDetail?.[index],
    };
  });
  const totalPullsBySize = pulls.reduce((acc, item) => {
    const { size } = item;
    if (!acc[size]) {
      acc[size] = 1;
    } else {
      acc[size] = acc[size] + 1;
    }
    return acc;
  }, {});
  const averagePullsBySize = rollups(
    pulls,
    (v) =>
      mean(v, (d) => d.merged_time)
        ? +mean(v, (d) => d.merged_time).toFixed(2)
        : null,
    (d) => d.size
  );
  console.log("averagePullsBuSize", averagePullsBySize);
  const averagePullBySizeObj = averagePullsBySize.map((el) => {
    return {
      size: el[0],
      value: el[1],
    };
  });
  const noMergeData = averagePullsBySize.every((el) => el[1] === null);

  return (
    <section className="w-full bg-white">
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-4 sm:px-6 font-light text-sm">
          Average Merge Time by Pull Request Size
        </div>
        {!noMergeData && pulls && pullsDetail && (
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
