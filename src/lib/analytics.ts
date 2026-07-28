import ReactGA from "react-ga4";

export function initAnalytics() {
  if (typeof window !== "undefined") {
    ReactGA.initialize("G-E9K66V1C8X");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }
}