import { cn } from "@/utils/utils";

describe("cn", () => {
  it("merges multiple class names", () => {
    const result = cn("text-lg", "font-bold", "p-4");
    expect(result).toBe("text-lg font-bold p-4");
  });

  it("removes duplicate class names and keeps the last occurrence", () => {
    const result = cn("text-lg", "text-sm", "font-bold");
    expect(result).toBe("text-sm font-bold");
  });

  it("handles conditional classes from clsx", () => {
    const result = cn("text-lg", { "font-bold": true, "font-light": false });
    expect(result).toBe("text-lg font-bold");
  });

  it("returns an empty string when no classes are provided", () => {
    const result = cn();
    expect(result).toBe("");
  });
});
