# 📈 Analytics Icons

This package helps you display the right icon for web browsers, operating systems, and device manufacturers. It's super useful if you're building an analytics product.

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/analytics-icons.svg)](https://travis-ci.org/AnandChowdhary/analytics-icons)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/analytics-icons.svg)](https://github.com/AnandChowdhary/analytics-icons/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/analytics-icons.svg)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/analytics-icons.svg)](https://www.npmjs.com/package/analytics-icons)
[![NPM version](https://img.shields.io/npm/v/analytics-icons.svg)](https://www.npmjs.com/package/analytics-icons)
[![Types](https://img.shields.io/npm/types/analytics-icons.svg)](https://www.npmjs.com/package/analytics-icons)

## ⭐ Getting started

Add Analytics Icons to your project:

```bash
npm install analytics-icons
```

Then import it in your project:

```js
import icon from "analytics-icons"
```

And use the function with your product query:

```js
const chrome = icon("Chrome"); // Returns a CDN image URL for the Google Chrome icon
const mac = icon("macOS");

// Add the image URL to an `img` tag
document.querySelector("img").setAttribute("src", mac);
```

## 🎨 Examples

<table style="text-align: center">
  <tbody>
    <tr>
      <td>
        <img style="width: 50px; height: 50px" alt="Chrome icon" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/chrome/chrome_128x128.png">
        <p>Chrome</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Safari icon" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/safari/safari_128x128.png">
        <p>Safari</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Firefox icon" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/firefox/firefox_128x128.png">
        <p>Firefox</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Opera icon" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/opera/opera_128x128.png">
        <p>Opera</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Edge icon" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/edge/edge_128x128.png">
        <p>Edge</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Vivaldi icon" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/vivaldi/vivaldi_128x128.png">
        <p>Vivaldi</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="UC Browser icon" src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/uc/uc_128x128.png">
        <p>UC Browser</p>
      </td>
    </tr>
    <tr>
      <td>
        <img style="width: 50px; height: 50px" alt="Windows icon" src="https://unpkg.com/analytics-icons/icons/windows.png">
        <p>Windows</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Android icon" src="https://unpkg.com/analytics-icons/icons/android.png">
        <p>Android</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="iOS icon" src="https://unpkg.com/analytics-icons/icons/ios.png">
        <p>iOS</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Linux icon" src="https://unpkg.com/analytics-icons/icons/linux.png">
        <p>Linux</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Apple icon" src="https://unpkg.com/analytics-icons/icons/apple.png">
        <p>Apple</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Samsung icon" src="https://unpkg.com/analytics-icons/icons/samsung.png">
        <p>Samsung</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="OnePlus icon" src="https://unpkg.com/analytics-icons/icons/oneplus.png">
        <p>OnePlus</p>
      </td>
    </tr>
    <tr>
      <td>
        <img style="width: 50px; height: 50px" alt="Windows icon" src="https://lipis.github.io/flag-icon-css/flags/1x1/in.svg">
        <p>India</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Windows icon" src="https://lipis.github.io/flag-icon-css/flags/1x1/nl.svg">
        <p>Netherlands</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Windows icon" src="https://lipis.github.io/flag-icon-css/flags/1x1/us.svg">
        <p>United States</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Windows icon" src="https://lipis.github.io/flag-icon-css/flags/1x1/eu.svg">
        <p>EU</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Windows icon" src="https://lipis.github.io/flag-icon-css/flags/1x1/jp.svg">
        <p>Japan</p>
      </td>
      <td>
        <img style="width: 50px; height: 50px" alt="Windows icon" src="https://lipis.github.io/flag-icon-css/flags/1x1/np.svg">
        <p>Nepal</p>
      </td>
    </tr>
  </tbody>
</table>

## 📝 License

MIT
