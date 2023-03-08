import BoxPRIssues from "./BoxPRIssues";
import IssuesChart from "./IssuesChart";
import PRChart from "./PRChart";
import { useState } from "react";

const MonthSummary = () => {
  const [pr, setPr] = useState(true);
  const renderPR = () => {
    setPr(true);
  };
  const renderIssues = () => {
    setPr(false);
  };

  return (
    <section className="w-full bg-white">
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="text-sm font-light px-4 py-4 sm:px-6">
          Month Summary
        </div>
        <div className="">
          <BoxPRIssues
            pr={pr}
            renderPR={renderPR}
            renderIssues={renderIssues}
          />
          {pr ? <PRChart /> : <IssuesChart />}
        </div>
      </div>
    </section>
  );
};
export default MonthSummary;
