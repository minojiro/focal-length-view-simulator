import { it, expect } from "vitest";
import { getFrameRatio, getDiagonalSize } from "./sizeCalculator";

it("getFrameRatio", () => {
  // Full-size to Full-size
  expect(getFrameRatio(36, 16, 36, 16)).toBeCloseTo(1.0);
  expect(getFrameRatio(36, 50, 36, 50)).toBeCloseTo(1.0);
  expect(getFrameRatio(36, 50, 36, 35)).toBeCloseTo(1.3746);
  // Full-size to APS-C
  expect(getFrameRatio(36, 50, 23.6, 50)).toBeCloseTo(0.67);
});

it("getDiagonalSize", () => {
  expect(getDiagonalSize(1, Math.sqrt(3))).toBeCloseTo(2.0);
});
