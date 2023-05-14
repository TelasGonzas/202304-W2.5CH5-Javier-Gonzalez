import { emptyBoardGenerator, randomBoardGenerator } from "./board";

describe("Given the function emptyBoardGenerator", () => {
  describe("When given the parameters (3, 3)", () => {
    test("Then it should return an array of three arrays, with 3 index each", () => {
      const columns = 3;
      const rows = 3;

      const expectedResult = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const expectedValue = emptyBoardGenerator(columns, rows);

      expect(expectedResult).toStrictEqual(expectedValue);
    });
  });
});

describe("Given the function randomBoardGenerator", () => {
  describe("When given the parameters (3, 3)", () => {
    test("Then it should return an array of three arrays, with 3 index each", () => {
      const columns = 3;
      const rows = 3;

      expect(randomBoardGenerator(columns, rows)).toHaveLength(3);
    });
  });
});
