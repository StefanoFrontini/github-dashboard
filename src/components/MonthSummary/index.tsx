import { useState } from "react";
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

  if (pr && pulls.length === 0) return null;
  if (!pr && issues.length === 0) return null;

  return (
    <section className="w-full bg-white">
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="text-sm font-light px-4 py-4 sm:px-6">
          Month Summary
        </div>
        <BoxPRIssues pr={pr} renderPR={renderPR} renderIssues={renderIssues} />
        {pr ? (
          <Line title="Pull Requests" data={pullsDistributions(pulls)} />
        ) : (
          <Line title="Issues" data={issuesDistributions(issues)} />
        )}
      </div>
    </section>
  );
};
export default MonthSummary;
