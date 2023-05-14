import { emptyBoardGenerator, randomBoardGenerator } from "./board";

describe("Given the function emptyBoardGenerator", () => {
  describe("When given the parameters (3, 3)", () => {
    test("Then it should return an array of three arrays, with 3 index each", () => {
      const expectedResult = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const expectedValue = emptyBoardGenerator(3, 3);

      expect(expectedResult).toStrictEqual(expectedValue);
    });
  });
});
