const yaml = require("js-yaml");
const { DateTime } = require("luxon");
// const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
    // Disable automatic use of your .gitignore
    eleventyConfig.setUseGitIgnore(false);

    // Merge data instead of overriding
    eleventyConfig.setDataDeepMerge(true);

    // human readable date
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
    });

    // To Support .yaml Extension in _data
    // You may remove this if you can use JSON
    eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

    // Copy Static Files to /_Site
    eleventyConfig.addPassthroughCopy({
        "./src/admin/config.yml": "./admin/config.yml",
        "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
        "./node_modules/flowbite/dist/flowbite.min.js": "./static/js/flowbite.js",
    });

    // Copy Image Folder to /_site
    eleventyConfig.addPassthroughCopy("./src/static/img");

    // Copy favicon to route of /_site
    eleventyConfig.addPassthroughCopy("./src/favicon.ico");

    // Minify HTML
    // @minimo.io: Package html-minifier had too many vulnerabilities, leave off the boilerplate for now (commeted)
    // eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    //     // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    //     if (outputPath.endsWith(".html")) {
    //         let minified = htmlmin.minify(content, {
    //             useShortDoctype: true,
    //             removeComments: true,
    //             collapseWhitespace: true,
    //         });
    //         return minified;
    //     }

    //     return content;
    // });

    // Let Eleventy transform HTML files as nunjucks
    // So that we can use .html instead of .njk
    // Even if i do not always use it @minimo.io
    return {
        dir: {
            input: "src",
        },
        htmlTemplateEngine: "njk",
    };
};
