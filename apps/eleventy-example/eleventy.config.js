export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
  },
};
