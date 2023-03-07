import { describe, test, expect } from "vitest";
import { rollups, mean } from "d3";

describe("d3-rollups", () => {
  test("calculate the mean", () => {
    const data = [
      { size: "small", merged_time: 2 },
      { size: "small", merged_time: 4 },
      { size: "large", merged_time: 6 },
      { size: "large", merged_time: null },
    ];
    const result = rollups(
      data,
      (v) => +mean(v, (d) => d.merged_time).toFixed(2),
      (d) => d.size
    );
    expect(result).toEqual([
      ["small", 3],
      ["large", 6],
    ]);
  });
});
