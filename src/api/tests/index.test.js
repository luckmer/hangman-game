import api from "../Index";

describe("api", () => {
  test("api should contain data", () => {
    const apiLength = api.length;

    expect(apiLength).toEqual(117);
  });

  test("api can not be empty", () => {
    const apiLength = api.length;

    expect(apiLength).not.toEqual(0);
  });
});
