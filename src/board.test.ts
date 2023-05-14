import { randomBoardGenerator } from "./board";

describe("Given the function randomBoardGenerator", () => {
  describe("When given the parameters (3, 3)", () => {
    test("Then it should return an array of three arrays, with 3 index each", () => {
      const columns = 3;
      const rows = 3;

      expect(randomBoardGenerator(columns, rows)).toHaveLength(3);
    });
  });
});
