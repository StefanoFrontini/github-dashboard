import { useGithubContext } from "../../hooks/useGithubContext";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
interface Props {
  pr: boolean;
  renderPR: () => void;
  renderIssues: () => void;
}
const BoxPRIssues: React.FC<Props> = ({ renderPR, renderIssues, pr }) => {
  const { pulls, issues } = useGithubContext();
  if (!pulls || !issues) return null;
  return (
    <div className="flex pl-6">
      <div
        onClick={() => renderPR()}
        className={classNames(
          pr
            ? ""
            : "hover:bg-gray-100 dark:hover:bg-slate-700 hover:border-sky-600 dark:hover:border-sky-800 hover: border-t-[3px] border-transparent",
          "cursor-pointer pb-2 sm:pb-8"
        )}
      >
        <div
          className={classNames(
            pr
              ? "border-sky-600 dark:border-sky-800  border-t-[3px] text-black dark:text-gray-200 "
              : "border-transparent text-gray-500",
            "truncate  p-4  pb-3 font-normal text-xs sm:text-base "
          )}
        >
          Pull Requests
        </div>
        <div
          className={classNames(
            pr ? "text-black dark:text-gray-200" : "text-gray-500",
            "pl-4 sm:text-5xl font-normal tracking-tight text-3xl "
          )}
        >
          {pulls.length}
        </div>
      </div>
      <div
        onClick={() => renderIssues()}
        className={classNames(
          !pr
            ? ""
            : "border-transparent hover:bg-gray-100 dark:hover:bg-slate-700 hover:border-sky-600 dark:hover:border-sky-800 hover: border-t-[3px]",
          "cursor-pointer pb-2 sm:pb-8 w-24 sm:w-32"
        )}
      >
        <div
          className={classNames(
            !pr
              ? "border-sky-600 dark:border-sky-800 border-t-[3px] text-black dark:text-gray-200 "
              : "border-transparent text-gray-500",
            "truncate   p-4 pb-3 font-normal text-xs sm:text-base"
          )}
        >
          Issues
        </div>
        <div
          className={classNames(
            !pr ? "text-black dark:text-gray-200" : "text-gray-500",
            "pl-4 text-3xl sm:text-5xl font-normal tracking-tight "
          )}
        >
          {issues.length}
        </div>
      </div>
    </div>
  );
};

export default BoxPRIssues;
