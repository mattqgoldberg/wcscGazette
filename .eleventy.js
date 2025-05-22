const { DateTime } = require("luxon");
const path = require("path");

module.exports = function(eleventyConfig) {
  // Date formatting filter
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("MMMM d, yyyy");
  });
  
  // Limit filter for collections
  eleventyConfig.addFilter("limit", function(arr, limit) {
    return arr.slice(0, limit);
  });
  
  // Extract excerpt from content
  eleventyConfig.addFilter("excerpt", function(content) {
    if (!content) return '';
    const excerpt = content.substring(0, 200);
    return excerpt.substring(0, excerpt.lastIndexOf(' ')) + '...';
  });
  
  // Filter collection by a property value
  eleventyConfig.addFilter("filterBy", function(collection, key, value) {
    if (!collection) return [];
    return collection.filter(item => {
      if (item && item.data && key.startsWith('data.')) {
        const nestedKey = key.split('.')[1];
        return item.data[nestedKey] === value;
      }
      return false;
    });
  });

  // Copy assets to the output folder
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  
  // Handle Netlify CMS admin files
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Also copy images folder for CMS uploads
  eleventyConfig.addPassthroughCopy({ "assets/images": "assets/images" });
  
  // Copy any JS files
  eleventyConfig.addPassthroughCopy("src/**/*.js");
  
  // Add collections for organizing council members
  eleventyConfig.addCollection("councilMembers", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/council/*.md");
  });
  
  eleventyConfig.addCollection("executiveMembers", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/council/*.md").filter(item => {
      return item.data.category === "Executive";
    }).sort((a, b) => (a.data.order || 100) - (b.data.order || 100));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
