import { Suspense, lazy, useRef, useEffect, useState } from "react";
import AverageMergeTimePRSize from "../components/AverageMergeTimePRSize";
import MiddleSection from "../components/MiddleSection";
// import MonthSummary from "../components/MonthSummary";
import { useGithubContext } from "../hooks/useGithubContext";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Header from "../components/Header";
import { useInView } from "react-intersection-observer";
// import TopPulls from "../components/Contributors/TopPulls";
// import useObserver from "../hooks/useObserver";
const TopPulls = lazy(() => import("../components/Contributors/TopPulls"));
const MonthSummary = lazy(() => import("../components/MonthSummary"));

interface Props {
  isDarkMode: boolean | undefined;
  toggleDarkMode: () => void;
}

const Dashboard: React.FC<Props> = ({ isDarkMode, toggleDarkMode }) => {
  const { isLoading, error, pulls } = useGithubContext();
  const { ref: refPulls, inView: inViewPulls } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { ref: refSummary, inView: inViewSummary } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const [headerHeight, setHeaderHeight] = useState(0);
  const refHeader = useRef<HTMLElement>(null);

  useEffect(() => {
    if (refHeader.current)
      setHeaderHeight(refHeader.current.getBoundingClientRect().height);
  }, []);

  if (isLoading && headerHeight > 0) {
    return (
      <>
        {error.show && <Error />}
        <header className="max-w-[1300px] mx-auto">
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </header>
        <main>
          <div
            className="max-w-screen-xl mx-auto flex justify-center items-center bg-white dark:bg-slate-900"
            // className={style}
            style={{ height: "calc(100vh - " + headerHeight + "px)" }}
          >
            <Loading />
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      {error.show && <Error />}
      <header className="max-w-[1300px] mx-auto" ref={refHeader}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <main className="max-w-screen-xl flex flex-col items-center p-6 mx-auto">
        {pulls?.length > 0 && <AverageMergeTimePRSize />}
        {pulls && <MiddleSection />}
        <div ref={refPulls} className="w-full">
          <Suspense fallback={<Loading />}>
            {inViewPulls && pulls?.length > 0 && <TopPulls />}
          </Suspense>
        </div>
        <div ref={refSummary} className="w-full">
          <Suspense fallback={<Loading />}>
            {inViewSummary && pulls && <MonthSummary />}
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
