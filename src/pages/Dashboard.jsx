import AverageMergeTimePRSize from "../components/AverageMergeTimePRSize";
import MiddleSection from "../components/MiddleSection";
import MonthSummary from "../components/MonthSummary";
import { useGithubContext } from "../context/context";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Header from "../components/Header";
const Dashboard = () => {
  const { isLoading, error } = useGithubContext();
  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    );

  return (
    <>
      {error.show && <Error />}
      <header className="max-w-[1300px] mx-auto">
        <Header />
      </header>
      <main className="max-w-screen-xl flex flex-col items-center p-6 mx-auto">
        <AverageMergeTimePRSize />
        <MiddleSection />
        <MonthSummary />
      </main>
    </>
  );
};

export default Dashboard;
