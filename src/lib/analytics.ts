export function initAnalytics() {
  if (typeof window !== "undefined") {
    import("react-ga4").then(({ default: ReactGA }) => {
      ReactGA.initialize("G-E9K66V1C8X");
    });
  }
}

export function trackPageView(page: string) {
  if (typeof window !== "undefined") {
    import("react-ga4").then(({ default: ReactGA }) => {
      ReactGA.send({
        hitType: "pageview",
        page,
      });
    });
  }
}