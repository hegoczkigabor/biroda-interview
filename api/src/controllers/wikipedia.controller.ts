import wikipediaService from "../services/wikipedia.service";

const transformTitle = (title: string) => title.replace(/ /g, "_") + "_(film)";

const getWikipediaOverviewByMovieTitle = async (title: string) => {
  const { data } = await wikipediaService.fetchWikiData(transformTitle(title));
  const pages = (<any>data).query.pages;
  const details = pages[Object.keys(pages)[0]];
  return details.extract;
};

const getWikipediaPageUrlByMovieTitle = (title: string) =>
  `https://en.wikipedia.org/wiki/${transformTitle(title)}`;

export default {
  getWikipediaOverviewByMovieTitle,
  getWikipediaPageUrlByMovieTitle,
};
