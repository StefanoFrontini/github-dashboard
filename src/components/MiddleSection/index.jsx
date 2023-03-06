import AverageIssueCloseTime from "./AverageIssueCloseTime";
import AveragePRMergeTime from "./AveragePRMergeTime.jsx";

const MiddleSection = () => {
  return (
    <section className="w-full ">
      <div className="flex gap-x-6 flex-wrap">
        <AveragePRMergeTime />
        <AverageIssueCloseTime />
      </div>
    </section>
  );
};
export default MiddleSection;
