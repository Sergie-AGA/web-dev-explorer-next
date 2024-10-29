import { generateImageUrl } from "@/utils/imageHelpers";

describe("generateImageUrl", () => {
  it("returns the image URL as is if it starts with 'http'", () => {
    const url = "http://example.com/image.jpg";
    expect(generateImageUrl(url)).toBe(url);
  });

  it("prepends '/images/' if the URL does not start with 'http'", () => {
    const url = "image.jpg";
    expect(generateImageUrl(url)).toBe("/images/image.jpg");
  });
});
