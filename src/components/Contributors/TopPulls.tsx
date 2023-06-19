// import { useRef } from "react";

import { Pie } from "../Charts/Pie";
// import { useInView } from "framer-motion";

const TopPulls = () => {
  // const refT = useRef(null);
  // const isInView = useInView(refT, { once: true, amount: 0.5 });

  return (
    <section className="w-full dark:bg-slate-800 bg-white">
      <div className="mb-6 sm:mb-6 flex-1  divide-y divide-gray-200 dark:divide-gray-700 overflow-hidden rounded-lg  shadow">
        <div className="px-4 py-4 sm:px-6 text-sm font-light dark:text-gray-200">
          Top 5 constributors - pull requests
        </div>
        <div>
          <Pie />
        </div>
      </div>
    </section>
  );
};
export default TopPulls;
