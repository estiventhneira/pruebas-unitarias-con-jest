import { sumar, multiplicar, restar, dividir } from "../maths";

describe("calculos matematicos", () => {
  test("Pruebas con Sumas", () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test("prueba de multiplicar", () => {
    expect(multiplicar(2, 4)).toBe(8);
  });
  test("Pruebas con Restas", () => {
    expect(restar(1, 1)).toBe(0);
  });
});
