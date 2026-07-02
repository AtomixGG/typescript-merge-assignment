import { merge } from "../src/index";

describe("merge", () => {
  it("merges three pre-sorted collections into ascending order", () => {
    const result = merge([1, 4, 7], [9, 6, 3, 1, 0], [2, 5, 8]);

    expect(result).toEqual([0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("handles empty collections", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([], [], [1])).toEqual([1]);
    expect(merge([1], [], [])).toEqual([1]);
  });

  it("preserves duplicates in sorted order", () => {
    const result = merge([2, 2, 5], [4, 4, 4], [1, 2, 3]);

    expect(result).toEqual([1, 2, 2, 2, 3, 4, 4, 4, 5]);
  });

  it("supports negative numbers", () => {
    const result = merge([-5, 0, 3], [4, 1, -1, -2], [-10, 2]);

    expect(result).toEqual([-10, -5, -2, -1, 0, 1, 2, 3, 4]);
  });

  it("works for single-element collections", () => {
    expect(merge([7], [6], [5])).toEqual([5, 6, 7]);
    expect(merge([], [9], [])).toEqual([9]);
  });

  it("works when collections have different lengths", () => {
    const result = merge([10, 20], [15, 12, 8], [5, 25]);

    expect(result).toEqual([5, 8, 10, 12, 15, 20, 25]);
  });

  it("handles all-same values", () => {
    expect(merge([4, 4, 4], [4, 4], [4, 4, 4])).toEqual([4, 4, 4, 4, 4, 4, 4, 4]);
  });

  it("keeps the order when values are already sorted across all inputs", () => {
    const result = merge([1, 3, 5], [9, 8, 7], [2, 4, 6]);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("handles a larger dataset", () => {
    const left = [1, 3, 5, 7, 9];
    const middle = [10, 8, 6, 4, 2];
    const right = [11, 12, 13];

    expect(merge(left, middle, right)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  });

  it("does not modify the input arrays", () => {
    const c1 = [1, 3, 5];
    const c2 = [6, 4, 2];
    const c3 = [7, 8];

    merge(c1, c2, c3);

    expect(c1).toEqual([1, 3, 5]);
    expect(c2).toEqual([6, 4, 2]);
    expect(c3).toEqual([7, 8]);
  });
});