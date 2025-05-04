import * as cheerio from "cheerio";

export async function scrapeWebsite(
  baseUrl: string,
  maxDepth: number = 3,
  maxConcurrent: number = 5
) {
  const visited = new Set<string>();
  const content: string[] = [];
  const baseUrlObj = new URL(baseUrl);

  // Semaphore for limiting concurrent requests
  let currentConcurrent = 0;

  async function crawl(url: string, depth: number = 0) {
    if (visited.has(url) || depth > maxDepth) return;
    visited.add(url);

    // Wait if too many concurrent requests
    while (currentConcurrent >= maxConcurrent) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    currentConcurrent++;

    try {
      const response = await fetch(url);
      const html = await response.text();
      const $ = cheerio.load(html);

      // Remove unwanted elements
      $("script").remove();
      $("style").remove();
      $("comments").remove();
      $("[style]").remove();
      $("noscript").remove();
      $("iframe").remove();

      // Extract text content
      const text = $("body")
        .find("*")
        .contents()
        .map((_, element) => {
          if (element.type === "text") {
            return $(element).text().trim();
          }
          return "";
        })
        .get()
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();

      if (text) content.push(text);

      // Collect all valid URLs first
      const urls: string[] = [];
      $("a").each((_, element) => {
        const href = $(element).attr("href");
        if (!href) return;

        try {
          let newUrl: string;
          if (href.startsWith("http")) {
            const hrefUrl = new URL(href);
            if (hrefUrl.hostname !== baseUrlObj.hostname) return;
            newUrl = href;
          } else if (href.startsWith("/")) {
            newUrl = new URL(href, baseUrl).toString();
          } else if (
            !href.startsWith("#") &&
            !href.startsWith("mailto:") &&
            !href.startsWith("tel:")
          ) {
            newUrl = new URL(href, url).toString();
          } else {
            return;
          }

          if (!visited.has(newUrl)) {
            urls.push(newUrl);
          }
        } catch (error) {
          console.error(`Invalid URL ${href}:`, error);
        }
      });

      // Crawl all collected URLs concurrently
      await Promise.all(urls.map((newUrl) => crawl(newUrl, depth + 1)));
    } catch (error) {
      console.error(`Error crawling ${url}:`, error);
    } finally {
      currentConcurrent--;
    }
  }

  await crawl(baseUrl);
  return content.join(" ");
}

