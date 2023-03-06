import mockIssues from "./mockData/mockIssues";
import mockPulls from "./mockData/mockPulls";
import mockFiles26270 from "./mockData/mockFiles26270";
import mockFiles26271 from "./mockData/mockFiles26271";
import mockFiles26272 from "./mockData/mockFiles26272";
import mockFiles26274 from "./mockData/mockFiles26274";
import mockFiles26275 from "./mockData/mockFiles26275";
import mockFiles26278 from "./mockData/mockFiles26278";
import mockFiles26282 from "./mockData/mockFiles26282";
import mockFiles26283 from "./mockData/mockFiles26283";
import mockFiles26285 from "./mockData/mockFiles26285";
import mockFiles26288 from "./mockData/mockFiles26288";
import React, { useEffect, useState } from "react";
import axios from "axios";
const repo = "react";
const organization = "facebook";

const rootUrl = "https://api.github.com";
const mockPullsDetail = [
  mockFiles26288,
  mockFiles26285,
  mockFiles26283,
  mockFiles26282,
  mockFiles26278,
  mockFiles26275,
  mockFiles26274,
  mockFiles26272,
  mockFiles26271,
  mockFiles26270,
];
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [issues, setIssues] = useState(mockIssues);
  const [pulls, setPulls] = useState(mockPulls);
  const [pullsDetail, setPullsDetail] = useState(mockPullsDetail);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };
  // https://api.github.com/repos/facebook/react/issues?state=closed
  // https://api.github.com/repos/facebook/react/pulls/26283/files
  // https://api.github.com/repos/facebook/react/pulls?per_page=10&state=closed

  useEffect(() => {
    const getPullDetail = async (number) => {
      try {
        const { data } = await axios.get(
          `${rootUrl}/repos/${organization}/${repo}/pulls/${number}/files`
        );
        return data;
      } catch (error) {
        throw new Error(error);
      }
    };
    const getIssues = async () => {
      try {
        const { data } = await axios.get(
          `${rootUrl}/repos/${organization}/${repo}/issues?state=closed`
        );
        return data;
      } catch (error) {
        throw new Error(error);
      }
    };
    const getPullsData = async () => {
      toggleError();
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `${rootUrl}/repos/${organization}/${repo}/pulls?per_page=10&state=closed`
        );
        console.log(data);
        const pullsDetail = () => data.map((el) => getPullDetail(el.number));
        try {
          const result = await Promise.all([getIssues(), ...pullsDetail()]);
          setPulls(data);
          setIssues(result[0]);
          setPullsDetail(result.slice[1]);
          console.log(result);
          console.log("pullsDetail", result.slice(1));
        } catch (error) {
          console.log("Error from promise.all!");
          toggleError(true, "Error from promise.all!");
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    const checkRequests = async () => {
      try {
        const {
          data: { rate },
        } = await axios.get(`${rootUrl}/rate_limit`);
        if (rate.remaining < 5) {
          toggleError(
            true,
            `Sorry, you have exceeded your hourly rate limit! Please try again after ${new Date(
              rate.reset * 1000
            )}. Showing dummy data.`
          );
          console.log(rate);
          return;
        }
        console.log(rate);
        getPullsData();
      } catch (error) {
        console.log(error);
      }
    };
    checkRequests();
  }, []);
  return (
    <GithubContext.Provider
      value={{ issues, pulls, pullsDetail, error, isLoading }}
    >
      {children}
    </GithubContext.Provider>
  );
};
const useGithubContext = () => {
  return React.useContext(GithubContext);
};

export { useGithubContext, GithubProvider };
