module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/*.md");
  });

  // Исправляем URL постов: /_posts/... -> /posts/...
  eleventyConfig.addFilter("postUrl", function(url) {
    return url.replace(/^\/_posts\//, "/posts/");
  });
};
