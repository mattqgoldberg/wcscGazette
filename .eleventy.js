const { DateTime } = require("luxon");
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("MMMM d, yyyy");
  });

  // Copy assets to the output folder
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
