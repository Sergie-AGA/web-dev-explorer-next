import { useURLState, generateQueryString } from "@/hooks/useURLState";
import { renderHook } from "@testing-library/react";
import { useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("useURLState", () => {
  it("returns an empty object when there are no search params", () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams(""));
    const { result } = renderHook(() => useURLState());
    expect(result.current).toEqual({});
  });

  it("returns a parsed query object from search params", () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("foo=bar&baz=qux")
    );
    const { result } = renderHook(() => useURLState());
    expect(result.current).toEqual({ foo: "bar", baz: "qux" });
  });

  it("returns query values as arrays if queryAsArray option is enabled", () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("category=books,fiction")
    );
    const { result } = renderHook(() => useURLState({ queryAsArray: true }));
    expect(result.current).toEqual({ category: ["books", "fiction"] });
  });

  it("leaves the text parameter as a string even when queryAsArray is enabled", () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("text=hello&category=books,fiction")
    );
    const { result } = renderHook(() => useURLState({ queryAsArray: true }));
    expect(result.current).toEqual({
      text: "hello",
      category: ["books", "fiction"],
    });
  });
});

describe("generateQueryString", () => {
  it("generates a query string from an object with single values", () => {
    const queryString = generateQueryString({ foo: "bar", baz: "qux" });
    expect(queryString).toBe("?foo=bar&baz=qux");
  });

  it("generates a query string from an object with array values", () => {
    const queryString = generateQueryString({
      category: ["books", "fiction"],
      type: "novel",
    });
    expect(queryString).toBe("?category=books,fiction&type=novel");
  });

  it("handles empty objects by returning an empty query string", () => {
    const queryString = generateQueryString({});
    expect(queryString).toBe("?");
  });
});
