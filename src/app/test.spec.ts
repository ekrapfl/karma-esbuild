import { test } from "./test";

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("test", () => {
  it("Test with 3s wait", async () => {
    await sleep(3000);
    expect(test()).toBe(true);
  });

  for (let i = 1; i < 101; i++)
    it(`Test ${i}`, () => {
      expect(test()).toBe(true);
    });
});
