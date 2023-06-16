import { useEffect, useState, useCallback } from "react";
import {
  listPullsReposResponse,
  listIssuesReposResponse,
} from "../context/context";
import mockPulls from "../context/mockData/mockPulls";
import mockIssues from "../context/mockData/mockIssues";
import { axiosInstance } from "../utils/axiosInstance";
import { parseISO } from "date-fns";
import mockFiles26270 from "../context/mockData/mockFiles26270";
import mockFiles26271 from "../context/mockData/mockFiles26271";
import mockFiles26272 from "../context/mockData/mockFiles26272";
import mockFiles26274 from "../context/mockData/mockFiles26274";
import mockFiles26275 from "../context/mockData/mockFiles26275";
import mockFiles26278 from "../context/mockData/mockFiles26278";
import mockFiles26282 from "../context/mockData/mockFiles26282";
import mockFiles26283 from "../context/mockData/mockFiles26283";
import mockFiles26285 from "../context/mockData/mockFiles26285";
import mockFiles26288 from "../context/mockData/mockFiles26288";

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

const useFetchData = () => {
  const [pulls, setPulls] = useState<listPullsReposResponse["data"]>(mockPulls);
  const [issues, setIssues] = useState(mockIssues);
  const [pullsDetail, setPullsDetail] = useState(mockPullsDetail);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  const subtractMonth = (date: Date) => {
    const newDate = date.setMonth(date.getMonth() - 1);

    return new Date(newDate);
  };

  const checkRequests = useCallback(
    async (repo = "react", owner = "facebook") => {
      const getPullDetail = async (
        number: number,
        repo: string,
        owner: string
      ) => {
        const pullsDetailUrl = `${rootUrl}/repos/${owner.toLowerCase()}/${repo.toLowerCase()}/pulls/${number}/files`;
        try {
          const { data } = await axiosInstance.get(pullsDetailUrl);
          return data;
        } catch (error: unknown) {
          console.log(error);
          throw new Error("error");
        }
      };

      const parseDataIssues = (data: listIssuesReposResponse["data"]) => {
        // If the data is an array, return that
        if (Array.isArray(data)) {
          return data;
        }

        // Some endpoints respond with 204 No Content instead of empty array
        //   when there is no data. In that case, return an empty array.
        if (!data) {
          return [];
        }

        return data;
      };

      const getPaginatedDataIssues = async (
        url: string
      ): Promise<listIssuesReposResponse["data"]> => {
        const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
        let pagesRemaining = true;
        let data: listIssuesReposResponse["data"] = [];
        const now = new Date();
        const monthBefore = subtractMonth(now);

        while (pagesRemaining) {
          const response = await axiosInstance.get(url);

          let parsedData = parseDataIssues(response.data);

          const checkDate = parsedData.some(
            (el) => (parseISO(el.created_at) ?? new Date()) < monthBefore
          );
          // discard the results older than a month
          if (checkDate) {
            parsedData = parsedData.reduce(
              (acc: listIssuesReposResponse["data"], item) => {
                if ((parseISO(item.created_at) ?? new Date()) < monthBefore) {
                  return acc;
                } else {
                  return [...acc, item];
                }
              },
              []
            );
          }
          data = [...data, ...parsedData];

          const linkHeader = response.headers.link;

          pagesRemaining =
            linkHeader && linkHeader.includes(`rel="next"`) && !checkDate;

          if (pagesRemaining) {
            url = linkHeader.match(nextPattern)[0];
          }
        }

        return data;
      };
      const parseDataPulls = (data: listPullsReposResponse["data"]) => {
        // If the data is an array, return that
        if (Array.isArray(data)) {
          return data;
        }

        // Some endpoints respond with 204 No Content instead of empty array
        //   when there is no data. In that case, return an empty array.
        if (!data) {
          return [];
        }

        return data;
      };

      const getPaginatedDataPulls = async (
        url: string
      ): Promise<listPullsReposResponse["data"]> => {
        const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
        let pagesRemaining = true;
        let data: listPullsReposResponse["data"] = [];
        const now = new Date();
        const monthBefore = subtractMonth(now);

        while (pagesRemaining) {
          const response = await axiosInstance.get(url);

          let parsedData = parseDataPulls(response.data);
          const checkDate = parsedData.some(
            (el) => (parseISO(el.created_at) ?? new Date()) < monthBefore
          );
          // discard the results older than a month
          if (checkDate) {
            parsedData = parsedData.reduce(
              (acc: listPullsReposResponse["data"], item) => {
                if ((parseISO(item.created_at) ?? new Date()) < monthBefore) {
                  return acc;
                } else {
                  return [...acc, item];
                }
              },
              []
            );
          }
          data = [...data, ...parsedData];

          const linkHeader = response.headers.link;

          pagesRemaining =
            linkHeader && linkHeader.includes(`rel="next"`) && !checkDate;

          if (pagesRemaining) {
            url = linkHeader.match(nextPattern)[0];
          }
        }

        return data;
      };

      const getIssues = async (repo: string, owner: string) => {
        const issuesUrl = `${rootUrl}/repos/${owner.toLowerCase()}/${repo.toLowerCase()}/issues?per_page=100&state=closed`;

        try {
          const data = await getPaginatedDataIssues(issuesUrl);
          return data;
        } catch (error: unknown) {
          console.log(error);
          throw new Error("error");
        }
      };
      const getPullsData = async (repo: string, owner: string) => {
        const pullsUrl = `${rootUrl}/repos/${owner.toLowerCase()}/${repo.toLowerCase()}/pulls?per_page=100&state=closed`;
        toggleError();
        setIsLoading(true);
        try {
          const data = await getPaginatedDataPulls(pullsUrl);
          if (data) {
            const pullsDetail = () =>
              data.map((el) => getPullDetail(el.number, repo, owner));
            try {
              const result = await Promise.all([
                getIssues(repo, owner),
                ...pullsDetail(),
              ]);
              setPulls(data);
              setIssues(result[0]);
              setPullsDetail(result.slice(1));
            } catch (error) {
              console.log("Error from promise.all!");
              toggleError(
                true,
                "Sorry, you have exceed your hourly rate limit!"
              );
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
        getPullsData(repo, owner);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  useEffect(() => {
    checkRequests();
  }, [checkRequests]);

  return {
    pulls,
    issues,
    pullsDetail,
    isLoading,
    error,
    checkRequests,
  };
};
export default useFetchData;
