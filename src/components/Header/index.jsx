import { useGithubContext } from "../../context/context";

const Header = () => {
  const { repo, owner, changeRepo, changeOwner, checkRequests } =
    useGithubContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "repo") {
      changeRepo(value);
    }
    if (name === "owner") {
      changeOwner(value);
    }
  };
  const handleSubmit = (e) => {
    console.log("submit!");
    e.preventDefault();
    checkRequests();
  };
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={owner}
          onChange={(e) => handleChange(e)}
          name="owner"
          id="owner"
          className="text-2xl font-normal p-0 leading-6 block w-full rounded-md border-transparent focus:border-transparent focus:ring-0"
        />
        <input
          type="text"
          value={repo}
          onChange={(e) => handleChange(e)}
          name="repo"
          id="repo"
          className="text-sm text-gray-400 p-0 font-light border-transparent focus:border-transparent focus:ring-0"
        />
        <button type="submit" className="hidden">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Header;
