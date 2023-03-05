import BoxPRIssues from "./BoxPRIssues";
import IssuesChart from "./IssuesChart";
import PRChart from "./PRChart";

const MonthSummary = () => {
  return (
    <section className="w-full bg-white">
      <BoxPRIssues />
      <PRChart />
      <IssuesChart />
    </section>
  );
};
export default MonthSummary;
