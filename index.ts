import slugify from "slugify";
import browserIcons from "./data/browsers.json";
import hostedIcons from "./data/hosted.json";
import countries from "./data/countries.json";

const sendFallback = (query: string, url = `https://tse2.mm.bing.net/th?q={query}&w=100&h=100&p=0&dpr=2&adlt=moderate&c=1`) => {
  return url.replace(/{query}/g, encodeURIComponent(`${query} icon`));
};

export default (query: string, fallback?: string) => {
  if (!query) return sendFallback(query, fallback);
  query = slugify(query).toLowerCase();
  if (browserIcons.includes(query))
    return `https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/${query}/${query}_128x128.png`;
  if (hostedIcons.includes(query))
    return `https://unpkg.com/analytics-icons/icons/${query}.png`;
  if (countries.includes(query))
    return `https://lipis.github.io/flag-icon-css/flags/1x1/${query}.svg`;
  return sendFallback(query, fallback);
};
