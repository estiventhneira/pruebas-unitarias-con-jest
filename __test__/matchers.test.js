describe("Comparando Valores", () => {
  const user = {
    name: "estiventh",
    apellido: "neira",
  };
  const user2 = {
    name: "estiventh",
    apellido: "neira",
  };
  test("should be equal", () => {
    expect(user).toEqual(user);
  });
  test("should be equal", () => {
    expect(user).toEqual(user2);
  });
});
