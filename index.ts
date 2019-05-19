import slugify from "slugify";
import browserIcons from "./data/browsers.json";
import hostedIcons from "./data/hosted.json";
import countries from "./data/countries.json";

export default (query: string, fallback: string) => {
  if (!query) return fallback;
  query = slugify(query).toLowerCase();
  if (browserIcons.includes(query))
    return `https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/${query}/${query}_128x128.png`;
  if (hostedIcons.includes(query))
    return `https://unpkg.com/analytics-icons/icons/${query}.png`;
  if (countries.includes(query))
    return `https://lipis.github.io/flag-icon-css/flags/1x1/${query}.svg`;
  return fallback;
};
