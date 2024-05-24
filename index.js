browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);

    if (
      url.hostname === "www.google.com" &&
      url.pathname === "/search" &&
      !url.searchParams.get("udm")
    ) {
      url.searchParams.set("udm", "14");
      const redirectUrl = url.toString();
      return { redirectUrl };
    }
  },
  {
    urls: ["*://www.google.com/search*"],
  },
  ["blocking"]
);
