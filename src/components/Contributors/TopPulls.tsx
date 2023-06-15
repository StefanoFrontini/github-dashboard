// import { useRef } from "react";

import {Pie} from "../Charts/Pie";
// import { useInView } from "framer-motion";

const TopPulls = () => {
  // const refT = useRef(null);
  // const isInView = useInView(refT, { once: true, amount: 0.5 });

  return (
    <section className="w-full">
      <div className="mb-6 sm:mb-6 flex-1  divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-4 sm:px-6 text-sm font-light">
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
