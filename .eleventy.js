const { DateTime } = require("luxon");
const fs = require("fs");
const njk = require("nunjucks");

module.exports = function(eleventyConfig) {
  
  // Define the template formats to be processed by Eleventy
  eleventyConfig.setTemplateFormats(["njk", "md", "html"]);
  
  // Copy static assets from the "public" directory to the output directory
  eleventyConfig.addPassthroughCopy("public");
  
  // Handle extensionless files
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy({"src/*": "/"}); // This will copy extensionless files directly
  
  // Filters let you modify the content https://www.11ty.dev/docs/filters/
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Configure BrowserSync and add custom 404 middleware
  eleventyConfig.setBrowserSyncConfig({
    ghostMode: false,
    callbacks: {
      ready: function(err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const rendered = fs.readFileSync("build/404/index.html");
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(rendered);
          res.end();
        });
      },
    },
  });

  // Set the input directory, includes directory, and output directory
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  };
};
