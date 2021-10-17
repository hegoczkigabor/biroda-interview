import axios from "axios";

const fetchWikiData = async (wikiPageTitle: string) =>
  await axios(
    `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${wikiPageTitle}`
  );

export default { fetchWikiData };
