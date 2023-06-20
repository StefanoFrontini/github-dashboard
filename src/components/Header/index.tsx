import { useState } from "react";
import { useGithubContext } from "../../hooks/useGithubContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import GithubIcon from "../../components/GithubIcon";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isDarkMode: boolean | undefined;
  toggleDarkMode: () => void;
}

const Header: React.FC<Props> = ({ isDarkMode, toggleDarkMode }) => {
  const { checkRequests } = useGithubContext();
  const [repo, setRepo] = useState("react");
  const [owner, setOwner] = useState("facebook");

  const changeRepo = (repo: string) => {
    setRepo(repo);
  };
  const changeOwner = (owner: string) => {
    setOwner(owner);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "repo") {
      changeRepo(value);
    }
    if (name === "owner") {
      changeOwner(value);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkRequests(repo, owner);
  };
  return (
    <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 bg-white px-4 py-5 sm:px-6 dark:bg-slate-800">
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={owner}
          onChange={(e) => handleChange(e)}
          name="owner"
          id="owner"
          className="text-2xl font-normal p-0 mb-1 leading-6 block w-full rounded-md border-transparent focus:border-transparent  focus:ring-0 dark:bg-slate-800 dark:text-gray-200"
        />
        <input
          type="text"
          value={repo}
          onChange={(e) => handleChange(e)}
          name="repo"
          id="repo"
          className="text-sm text-gray-400 p-0 font-light border-transparent focus:border-transparent focus:ring-0 dark:bg-slate-800 dark:text-gray-400"
        />
        <button
          type="submit"
          className="max-w-fit mt-2 rounded bg-sky-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-sky-800 dark:text-gray-200 dark:hover:bg-sky-700 "
        >
          Change repo
        </button>
      </form>
      <div className="w-16 dark:text-gray-200">
        <div className="flex gap-4 w-full cursor-pointer">
          <AnimatePresence mode="wait">
            {isDarkMode ? (
              <motion.div
                key="1"
                className="w-full"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
              >
                <MoonIcon onClick={toggleDarkMode} />
              </motion.div>
            ) : (
              <motion.div
                key="2"
                className="w-full"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
              >
                <SunIcon onClick={toggleDarkMode} />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-full">
            <a
              target="_blank"
              href="https://github.com/StefanoFrontini/github-dashboard"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
