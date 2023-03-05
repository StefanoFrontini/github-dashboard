import AverageMergeTimePRSize from "../components/AverageMergeTimePRSize";
import MiddleSection from "../components/MiddleSection";
import MonthSummary from "../components/MonthSummary";
const Dashboard = () => {
  // if(isLoading) return (<main></main>)
  return (
    <main className="flex flex-col items-center p-6">
      <AverageMergeTimePRSize />
      <MiddleSection />
      <MonthSummary />
    </main>
  );
};

export default Dashboard;
