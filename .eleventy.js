const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(["*"]);
  eleventyConfig.addPassthroughCopy("public");

  // Filters let you modify the content https://www.11ty.dev/docs/filters/
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // New custom filter to add "test" class to paragraphs
  eleventyConfig.addFilter("betterClasses", content => {

    let map = {
      "p": "paragraph",
      "h1": "heading-large",
      "h2": "heading-medium",
      "h3": "heading-small",
      "h4": "paragrah-large"
    }
        
    for (let [key, value] of Object.entries(map)) {
      content = content.replace(new RegExp(`<${key}>`, "g"), `<${key} class="${value}">`)
    }
    
    return content
  })

  eleventyConfig.setBrowserSyncConfig({ ghostMode: false });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  };
};
