import PieChart from "../Charts/Pie/Pie";

const TopPulls = () => {
  return (
    <section className="w-full">
      <div className="mb-0 sm:mb-6 flex-1 my-6 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-4 sm:px-6 text-sm font-light">
          Top 5 constributors - pull requests
        </div>
        <div className="">
          <PieChart />
        </div>
      </div>
    </section>
  );
};
export default TopPulls;
