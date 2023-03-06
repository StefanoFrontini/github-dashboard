import AverageMergeTimePRSize from "../components/AverageMergeTimePRSize";
import MiddleSection from "../components/MiddleSection";
import MonthSummary from "../components/MonthSummary";
import { useGithubContext } from "../context/context";
import Loading from "../components/Loading";
import Error from "../components/Error";
const Dashboard = () => {
  const { isLoading, error } = useGithubContext();
  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    );

  return (
    <main className="flex flex-col items-center p-6">
      {error.show && <Error />}
      <AverageMergeTimePRSize />
      <MiddleSection />
      <MonthSummary />
    </main>
  );
};

export default Dashboard;
