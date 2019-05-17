import slugify from "slugify";

const browserIcons = ["adblock", "aloha", "amazon-internet", "android-webview-beta", "archive", "avant", "basilisk", "brave-beta", "brave-dev", "brave-nightly", "brave", "browsh", "chrome-beta", "chrome-canary", "chrome-dev", "chrome-devtools", "chrome", "chromium", "cốc-cốc", "dolphin", "edge-beta", "edge-canary", "edge-dev", "edge-tile", "edge", "electron", "epic", "falkon", "firefox-beta", "firefox-developer-edition", "firefox-focus", "firefox-lite", "firefox-nightly", "firefox-reality", "firefox", "icecat", "iridium", "jsdom", "maxthon", "midori", "mihtool", "min", "netsurf", "nw.js", "opera-beta", "opera-developer", "opera-mini-beta", "opera-mini", "opera-neon", "opera-touch", "opera", "otter", "pale-moon", "phoenix", "puffin", "qutebrowser", "safari-ios", "safari-technology-preview", "safari", "samsung-internet-beta", "samsung-internet-gear-vr", "samsung-internet", "seamonkey", "servo", "silk", "sogou-mobile", "tor", "uc-mini", "uc", "v8-ignition", "v8-liftoff", "v8-orinoco", "v8-turbofan", "v8", "vivaldi-snapshot", "vivaldi", "web", "yandex-alpha", "yandex-beta", "yandex-lite", "yandex"];
const hostedIcons = ["android", "apple", "cloudflare-always-online", "facebook-messenger", "huawei", "instagram", "internet-explorer", "ios", "lg", "linux", "lyf", "mac-os", "macos", "miui-browser", "mobile-internet-explorer", "motorola", "nokia", "obigo-q", "oneplus", "oppo", "os-x", "privacy", "samsung", "twitter", "uc-browser", "wechat", "windows-phone", "windows", "xiaomi"];

export default (query: string, fallback: string) => {
  if (!query) return fallback;
  query = slugify(query);
  if (browserIcons.includes(query)) return `https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/${query}/${query}_128x128.png`;
  if (hostedIcons.includes(query)) return `https://unpkg.com/analytics-icons/icons/${query}.png`;
  return fallback;
}
