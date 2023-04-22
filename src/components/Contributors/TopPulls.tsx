import PieChart from "../Charts/Pie/Pie";

const TopPulls = () => {
  return (
    <section className="w-full">
      <div className=" flex-1 mb-6 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
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
