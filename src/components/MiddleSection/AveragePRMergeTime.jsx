import { useGithubContext } from "../../context/context";

import { timeParse } from "d3";

const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");
const dateDiffInHours = (a, b) => {
  const ms_per_sec = 1000;
  return +((b - a) / ms_per_sec).toFixed(2);
};
const secondsToDhms = (seconds) => {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);

  const dDisplay = d > 0 ? d + (d == 1 ? "day " : "days ") : "";
  const hDisplay = h > 0 ? h + (h == 1 ? "h" : "h") : "";
  const mDisplay = m > 0 ? m + (m == 1 ? "m" : "m") : "";
  return dDisplay + hDisplay + mDisplay;
};
const AveragePRMergeTime = () => {
  let { pulls } = useGithubContext();
  pulls = pulls.map((el) => {
    const created_at = parseDate(el.created_at);
    const closed_at = parseDate(el.closed_at);
    const merged_at = parseDate(el.merged_at);
    return {
      created_at,
      closed_at,
      merged_at,
      merged_time: el.merged_at ? dateDiffInHours(created_at, merged_at) : null,
    };
  });
  const mergeTime = pulls.reduce((acc, item) => {
    const { merged_time } = item;
    if (!merged_time) return acc;
    if (!acc["merged_time"]) {
      acc["merged_time"] = item.merged_time;
      acc["number"] = 1;
    } else {
      acc["merged_time"] = acc["merged_time"] + item.merged_time;
      acc["number"] = acc["number"] + 1;
    }
    return acc;
  }, {});
  const averageMergeTime = +(mergeTime.merged_time / mergeTime.number).toFixed(
    2
  );
  return (
    <div className="mb-0 sm:mb-6 flex-1 my-6 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6 text-sm font-light">
        Average Pull Request Merge Time
      </div>
      <div className="px-4 py-14  text-6xl text-center">
        {secondsToDhms(averageMergeTime)}
      </div>
    </div>
  );
};

export default AveragePRMergeTime;
