// import useObserver from "../../hooks/use-observer";
import { useRef } from "react";

import Pie from "../Charts/Pie/Pie";
import { useAnimate, useInView } from "framer-motion";

const TopPulls = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.5 });
  const refT = useRef(null);

  return (
    <section className="w-full" ref={refT}>
      <div className="mb-6 sm:mb-6 flex-1  divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-4 sm:px-6 text-sm font-light">
          Top 5 constributors - pull requests
        </div>
        <div ref={scope}>
          <Pie animate={animate} isInView={isInView} />
        </div>
      </div>
    </section>
  );
};
export default TopPulls;
