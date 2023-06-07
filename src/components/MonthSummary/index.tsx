import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { useGithubContext } from "../../context/hookContext";
import { Line } from "../Charts/Line";
import BoxPRIssues from "./BoxPRIssues";
import { issuesDistributions } from "./issuesDistributions";
import { pullsDistributions } from "./pullsDistributions";
import useMeasure from "react-use-measure";

const MonthSummary = () => {
  const { pulls } = useGithubContext();
  const { issues } = useGithubContext();
  const [pr, setPr] = useState(true);
  const [ref, bounds] = useMeasure();

  const renderPR = () => {
    setPr(true);
  };

  const renderIssues = () => {
    setPr(false);
  };

  const refChart = useRef(null);
  const isInView = useInView(refChart, { once: true, amount: 0.2 });

  if (pr && pulls.length === 0) return null;
  if (!pr && issues.length === 0) return null;

  return (
    <section className="w-full h-full bg-white" ref={ref}>
      <div
        className=" overflow-hidden rounded-lg bg-white shadow"
        ref={refChart}
      >
        <div className="text-sm font-light px-4 py-4 sm:px-6">
          Month Summary
        </div>
        <BoxPRIssues pr={pr} renderPR={renderPR} renderIssues={renderIssues} />
        {pr
          ? bounds.width > 0 && (
              <Line
                isInView={isInView}
                title="Pull Requests"
                data={pullsDistributions(pulls)}
                width={bounds.width}
                height={0.5 * bounds.width}
              />
            )
          : bounds.width > 0 && (
              <Line
                isInView={isInView}
                title="Issues"
                data={issuesDistributions(issues)}
                width={bounds.width}
                height={0.5 * bounds.width}
              />
            )}
      </div>
    </section>
  );
};
export default MonthSummary;
