import { useGithubContext } from "../../context/context";
import { timeParse } from "d3";

// const parseTime = timeParse("%m");
const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");
const dateDiffInHours = (a, b) => {
  const ms_per_sec = 1000;
  // const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  // const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  // const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return +((b - a) / ms_per_sec).toFixed(2);
};
const secondsToDhms = (seconds) => {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  // const s = Math.floor(seconds % 60);

  const dDisplay = d > 0 ? d + (d == 1 ? "day " : "days ") : "";
  const hDisplay = h > 0 ? h + (h == 1 ? "h" : "h") : "";
  const mDisplay = m > 0 ? m + (m == 1 ? "m" : "m") : "";
  // const sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
  return dDisplay + hDisplay + mDisplay;
};

const AverageIssueCloseTime = () => {
  let { issues } = useGithubContext();
  issues = issues.map((el) => {
    const created_at = parseDate(el.created_at);
    const closed_at = parseDate(el.closed_at);
    return {
      created_at,
      closed_at,
      closed_time: el.closed_at ? dateDiffInHours(created_at, closed_at) : null,
    };
  });
  // console.log("issues", issues);
  const closedTime = issues.reduce((acc, item) => {
    const { closed_time } = item;
    if (!closed_time) return acc;
    if (!acc["closed_time"]) {
      acc["closed_time"] = item.closed_time;
      acc["number"] = 1;
    } else {
      acc["closed_time"] = acc["closed_time"] + item.closed_time;
      acc["number"] = acc["number"] + 1;
    }
    return acc;
  }, {});
  // number null?
  const averageClosedTime = +(
    closedTime.closed_time / closedTime.number.toFixed(2)
  );

  return <div>{secondsToDhms(averageClosedTime)}</div>;
};

export default AverageIssueCloseTime;
