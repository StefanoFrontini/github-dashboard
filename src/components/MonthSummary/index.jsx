import BoxPRIssues from "./BoxPRIssues";
import IssuesChart from "./IssuesChart";
import PRChart from "./PRChart";

const MonthSummary = () => {
  return (
    <section className="w-full bg-white">
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">Month Summary</div>
        <div className="px-4 py-5 sm:p-6">
          <BoxPRIssues />
          <PRChart />
          <IssuesChart />
        </div>
      </div>
    </section>
  );
};
export default MonthSummary;
