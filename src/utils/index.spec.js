import { getAverageTemp, getMinTemp, getMaxTemp } from "./index";

const temps = { "20 Jun 20": 20, "21 Jun 20": 30, "22 Jun 20": 40 };

describe("Util Tests", () => {
  it("should calculate average temperature", () => {
    const result = getAverageTemp(temps);

    expect(result).toEqual(Number(30).toFixed(1).toString());
  });

  it("should calculate minimum temperature", () => {
    const result = getMinTemp(temps);

    expect(result).toEqual(Number(20).toFixed(1).toString());
  });

  it("should calculate maximum temperature", () => {
    const result = getMaxTemp(temps);

    expect(result).toEqual(Number(40).toFixed(1).toString());
  });
});
