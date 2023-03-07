import AverageIssueCloseTime from "./AverageIssueCloseTime";
import AveragePRMergeTime from "./AveragePRMergeTime.jsx";

const MiddleSection = () => {
  return (
    <section className="w-full ">
      <div className="flex-col sm:flex-row flex gap-x-6 ">
        <AveragePRMergeTime />
        <AverageIssueCloseTime />
      </div>
    </section>
  );
};
export default MiddleSection;
