import AverageIssueCloseTime from "./AverageIssueCloseTime";
import AveragePRMergeTime from "./AveragePRMergeTime.jsx";

const MiddleSection = () => {
  return (
    <section>
      <div className="flex">
        <AveragePRMergeTime />
        <AverageIssueCloseTime />
      </div>
    </section>
  );
};
export default MiddleSection;
