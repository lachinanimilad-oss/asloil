export function initAnalytics() {
  if (typeof window === "undefined") return;

  import("react-ga4").then(({ default: ReactGA }) => {
    ReactGA.initialize("G-E9K66V1C8X");

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  });
}