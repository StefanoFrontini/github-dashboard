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
import React, { useState } from "react";

const rootUrl = "https://api.github.com";
// create pulls array with a size property and average time
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
  const [pulls, setpulls] = useState(mockPulls);
  const [pullsDetail, setPullsDetail] = useState(mockPullsDetail);
  return (
    <GithubContext.Provider value={{ issues, pulls, pullsDetail }}>
      {children}
    </GithubContext.Provider>
  );
};
//custom hook
const useGithubContext = () => {
  return React.useContext(GithubContext);
};

export { useGithubContext, GithubProvider };
