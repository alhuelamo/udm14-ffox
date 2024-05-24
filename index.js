function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);
    console.log(url.searchParams.get("udm"));
    if (
      url.hostname === "www.google.com" &&
      url.pathname === "/search" &&
      !url.searchParams.get("udm")
    ) {
      url.searchParams.set("udm", "14");
      const redirectUrl = url.toString();
      console.log(redirectUrl);
      return { redirectUrl };
    }
  },
  {
    urls: ["*://www.google.com/search*"],
  },
  ["blocking"]
);
