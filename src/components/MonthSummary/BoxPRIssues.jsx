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
              ? "border-[#0C60FF]  text-black "
              : "border-transparent text-[#6B6C7D]",
            "truncate  border-t-[3px] p-4  pb-3 font-normal text-base "
          )}
        >
          Pull Requests
        </div>
        <div
          className={classNames(
            pr ? "text-black" : "text-[#6B6C7D]",
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
              : "border-transparent text-[#6B6C7D]",
            "truncate   border-t-[3px] p-4 pb-3 font-normal text-base"
          )}
        >
          Issues
        </div>
        <div
          className={classNames(
            !pr ? "text-black" : "text-[#6B6C7D]",
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
