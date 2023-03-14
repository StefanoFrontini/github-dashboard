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
import { timeParse } from "d3";
const token = "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";
const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
const parseDate = timeParse("%Y-%m-%dT%H:%M:%SZ");

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
  const [repo, setRepo] = useState("react");
  const [owner, setOwner] = useState("facebook");
  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };
  const changeRepo = (repo) => {
    setRepo(repo);
  };
  const changeOwner = (owner) => {
    setOwner(owner);
  };
  const subtractMonth = (date) => {
    const newDate = date.setMonth(date.getMonth() - 1);

    return new Date(newDate);
  };
  const checkRequests = async () => {
    try {
      const {
        data: { rate },
      } = await axiosInstance.get(`${rootUrl}/rate_limit`);
      if (rate.remaining === 0) {
        toggleError(
          true,
          `Sorry, you have exceeded your hourly rate limit! Please try again after ${new Date(
            rate.reset * 1000
          )}. Showing dummy data.`
        );
        // console.log(rate);
        return;
      }
      // console.log(rate);
      getPullsData();
    } catch (error) {
      console.log(error);
    }
  };
  const getPaginatedData = async (url) => {
    const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
    let pagesRemaining = true;
    let data = [];
    const now = new Date();
    const monthBefore = subtractMonth(now);

    while (pagesRemaining) {
      const response = await axiosInstance.get(url);

      let parsedData = parseData(response.data);
      const checkDate = parsedData.some(
        (el) => parseDate(el.created_at) < monthBefore
      );
      // discard the results older than a month
      if (checkDate) {
        parsedData = parsedData.reduce((acc, item) => {
          if (parseDate(item.created_at) < monthBefore) {
            return acc;
          } else {
            return [...acc, item];
          }
        }, []);
      }
      data = [...data, ...parsedData];

      const linkHeader = response.headers.link;

      pagesRemaining =
        linkHeader && linkHeader.includes(`rel=\"next\"`) && !checkDate;

      if (pagesRemaining) {
        url = linkHeader.match(nextPattern)[0];
      }
    }

    return data;
  };

  const parseData = (data) => {
    // If the data is an array, return that
    if (Array.isArray(data)) {
      return data;
    }

    // Some endpoints respond with 204 No Content instead of empty array
    //   when there is no data. In that case, return an empty array.
    if (!data) {
      return [];
    }

    // Otherwise, the array of items that we want is in an object
    // Delete keys that don't include the array of items
    delete data.incomplete_results;
    delete data.repository_selection;
    delete data.total_count;
    // Pull out the array of items
    const namespaceKey = Object.keys(data)[0];
    data = data[namespaceKey];

    return data;
  };

  const getPullDetail = async (number) => {
    const pullsDetailUrl = `${rootUrl}/repos/${owner.toLowerCase()}/${repo.toLowerCase()}/pulls/${number}/files`;
    try {
      const { data } = await axiosInstance.get(pullsDetailUrl);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  const getIssues = async () => {
    const issuesUrl = `${rootUrl}/repos/${owner.toLowerCase()}/${repo.toLowerCase()}/issues?per_page=100&state=closed`;

    try {
      const data = await getPaginatedData(issuesUrl);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
  const getPullsData = async () => {
    const pullsUrl = `${rootUrl}/repos/${owner.toLowerCase()}/${repo.toLowerCase()}/pulls?per_page=100&state=closed`;
    toggleError();
    setIsLoading(true);
    try {
      const data = await getPaginatedData(pullsUrl);
      if (data) {
        const pullsDetail = () => data.map((el) => getPullDetail(el.number));
        try {
          const result = await Promise.all([getIssues(), ...pullsDetail()]);
          // if (result.every((el) => el != undefined)) {
          setPulls(data);
          setIssues(result[0]);
          setPullsDetail(result.slice(1));
          // console.log(result);
          // console.log("pullsDetail", result.slice(1));
          // } else {
          //   console.log("result", result);
          //   console.log("Some values are undefined!");
          // }
        } catch (error) {
          console.log("Error from promise.all!");
          toggleError(true, "Sorry, you have exceed your hourly rate limit!");
          setIsLoading(false);
          return;
        }
      }
    } catch (error) {
      console.log(error);
      toggleError(
        true,
        "Repository not found. Please try for instance: 'facebook' as owner and 'react' as repo"
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkRequests();
  }, []);
  return (
    <GithubContext.Provider
      value={{
        issues,
        pulls,
        pullsDetail,
        error,
        isLoading,
        repo,
        owner,
        changeRepo,
        changeOwner,
        checkRequests,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
const useGithubContext = () => React.useContext(GithubContext);

export { useGithubContext, GithubProvider };
