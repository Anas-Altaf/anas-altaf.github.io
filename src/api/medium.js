export async function fetchMediumArticles(username) {
  const mediumArticleLink = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
  try {
    const response = await fetch(mediumArticleLink);
    const data = await response.json();
    if (data.status === "ok" && data.items) {
      let url = data.feed.url.replace("/feed", "");
      return data.items.slice(0, 3).map((article, index) => ({
        id: index + 1,
        title: article.title,
        date: article.pubDate,
        link: article.link,
        url: url,
        image: article.description.match(/<img[^>]+src="([^"]+)"/)[1],
        desc:
          article.description
            .replace(/<[^>]*>/g, " ")
            .split(" ")
            .slice(0, 30)
            .join(" ") + "...",
        author: article.author,
      }));
    }
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
  }
  return [];
}
