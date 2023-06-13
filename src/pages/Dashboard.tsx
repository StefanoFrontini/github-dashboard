import { Suspense, lazy, useRef } from "react";
import AverageMergeTimePRSize from "../components/AverageMergeTimePRSize";
import MiddleSection from "../components/MiddleSection";
// import MonthSummary from "../components/MonthSummary";
import { useGithubContext } from "../hooks/useGithubContext";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Header from "../components/Header";
// import TopPulls from "../components/Contributors/TopPulls";
import useObserver from "../hooks/useObserver";
const TopPulls = lazy(() => import("../components/Contributors/TopPulls"));
const MonthSummary = lazy(() => import("../components/MonthSummary"));

const Dashboard = () => {
  const { isLoading, error } = useGithubContext();
  const refPulls = useRef(null);
  const refSummary = useRef(null);
  const isVisiblePulls = useObserver(refPulls);
  const isVisibleSummary = useObserver(refSummary);
  console.log(isVisibleSummary);

  if (isLoading)
    return (
      <>
        {error.show && <Error />}
        <header className="max-w-[1300px] mx-auto">
          <Header />
        </header>
        <main>
          <Loading />
        </main>
      </>
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
        <div ref={refPulls} className="w-full">
          <Suspense fallback={<Loading />}>
            {isVisiblePulls && <TopPulls />}
          </Suspense>
        </div>
        <div ref={refSummary} className="w-full">
          <Suspense fallback={<Loading />}>
            {isVisibleSummary && <MonthSummary />}
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
