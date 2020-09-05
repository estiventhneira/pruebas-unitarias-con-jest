import { getDataFromApi } from "../promise";

describe("probando promesas", () => {
  test("should return data", (done) => {
    const api = "https://rickandmortyapi.com/api/character/";
    getDataFromApi(api).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });

  test("should resolve Hola", () => {
    return expect(Promise.resolve("Hola!")).resolves.toBe("Hola!");
  });

  test("should reject with an error", () => {
    return expect(Promise.reject("Error")).rejects.toBe("Error");
  });
});
