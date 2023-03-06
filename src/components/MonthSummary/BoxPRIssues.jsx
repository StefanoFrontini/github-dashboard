import { useGithubContext } from "../../context/context";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
const BoxPRIssues = ({ renderPR, renderIssues, pr }) => {
  const { pulls, issues } = useGithubContext();
  return (
    <div className="flex pl-6">
      <div onClick={() => renderPR()} className="cursor-pointer">
        <div
          className={classNames(
            pr
              ? "border-[#0C60FF]  text-black-500"
              : "border-transparent text-gray-500",
            "truncate text-sm font-medium border-t-[3px] p-4 "
          )}
        >
          Pull Requests
        </div>
        <div
          className={classNames(
            pr ? "text-black" : "text-gray-400",
            "pl-4 text-5xl font-normal tracking-tight  "
          )}
        >
          {pulls.length}
        </div>
      </div>
      <div onClick={() => renderIssues()} className="cursor-pointer">
        <div
          className={classNames(
            !pr
              ? "border-[#0C60FF]  text-black"
              : "border-transparent text-gray-400",
            "truncate text-sm font-medium  border-t-[3px] p-4 "
          )}
        >
          Issues
        </div>
        <div
          className={classNames(
            !pr ? "text-black" : "text-gray-400",
            "pl-4 text-5xl font-normal tracking-tight "
          )}
        >
          {issues.length}
        </div>
      </div>
    </div>
  );
};

export default BoxPRIssues;
