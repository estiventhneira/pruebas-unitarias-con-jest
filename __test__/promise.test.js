import { getDataFromApi } from "../promise";

describe("probando promesas", () => {
  test("should return data", (done) => {
    const api = "https://rickandmortyapi.com/api/character/";
    getDataFromApi(api).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
});
