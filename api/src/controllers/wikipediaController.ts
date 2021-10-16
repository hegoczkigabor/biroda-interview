import axios from "axios";

const transformTitle = (title: string) => title.replace(/ /g, "_") + "_(film)";

const getWikipediaOverviewByMovieTitle = async (title: string) => {
  const wikipediaTitle = transformTitle(title);
  const wikiData = await axios(
    `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${wikipediaTitle}`
  );
  const data: any = wikiData.data;
  const pages = data.query.pages;
  const details = pages[Object.keys(pages)[0]];
  return details.extract;
};

const getWikipediaPageUrlByMovieTitle = (title: string) =>
  `https://en.wikipedia.org/wiki/${transformTitle(title)}`;

export default {
  getWikipediaOverviewByMovieTitle,
  getWikipediaPageUrlByMovieTitle,
};
