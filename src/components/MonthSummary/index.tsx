import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { useGithubContext } from "../../context/hookContext";
import { Line } from "../Charts/Line";
import BoxPRIssues from "./BoxPRIssues";
import { issuesDistributions } from "./issuesDistributions";
import { pullsDistributions } from "./pullsDistributions";

const MonthSummary = () => {
  const { pulls } = useGithubContext();
  const { issues } = useGithubContext();
  const [pr, setPr] = useState(true);

  const renderPR = () => {
    setPr(true);
  };

  const renderIssues = () => {
    setPr(false);
  };
  const refChart = useRef(null);
  const isInView = useInView(refChart, { once: true, amount: 0.2 });
  console.log(isInView);

  if (pr && pulls.length === 0) return null;
  if (!pr && issues.length === 0) return null;

  return (
    <section ref={refChart} className="w-full bg-white">
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="text-sm font-light px-4 py-4 sm:px-6">
          Month Summary
        </div>
        <BoxPRIssues pr={pr} renderPR={renderPR} renderIssues={renderIssues} />
        {pr ? (
          <Line
            isInView={isInView}
            title="Pull Requests"
            data={pullsDistributions(pulls)}
          />
        ) : (
          <Line
            isInView={isInView}
            title="Issues"
            data={issuesDistributions(issues)}
          />
        )}
      </div>
    </section>
  );
};
export default MonthSummary;
