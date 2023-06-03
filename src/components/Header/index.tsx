import { useState } from "react";
import { useGithubContext } from "../../context/hookContext";

const Header = () => {
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
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={owner}
          onChange={(e) => handleChange(e)}
          name="owner"
          id="owner"
          className="text-2xl font-normal p-0 mb-1 leading-6 block w-full rounded-md border-transparent focus:border-transparent  focus:ring-0"
        />
        <input
          type="text"
          value={repo}
          onChange={(e) => handleChange(e)}
          name="repo"
          id="repo"
          className="text-sm text-gray-400 p-0 font-light border-transparent focus:border-transparent focus:ring-0"
        />
        <button
          type="submit"
          className="max-w-fit mt-2 rounded bg-sky-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Change repo
        </button>
      </form>
    </div>
  );
};
export default Header;
