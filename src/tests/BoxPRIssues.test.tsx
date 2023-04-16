import { GithubProvider } from "../context/context";
import { render, screen } from "@testing-library/react";
import BoxPRIssues from "../components/MonthSummary/BoxPRIssues";

import { describe, test, expect, beforeEach } from "vitest";

describe("test BOXPRIssues component", () => {
  beforeEach(() => {
    render(
      <GithubProvider>
        <BoxPRIssues
          pr={false}
          renderPR={function (): void {
            throw new Error("Function not implemented.");
          }}
          renderIssues={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </GithubProvider>
    );
  });
  test("it shows 10 as default for pulls number", () => {
    expect(screen.getByText(10)).toBeTruthy();
  });
  test("it shows 30 as default for issues number", () => {
    expect(screen.getByText(30)).toBeTruthy();
  });
});
