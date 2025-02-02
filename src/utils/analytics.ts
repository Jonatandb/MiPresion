import ReactGA from "react-ga4"

const isAnalyticsEnabled = import.meta.env.VITE_ANALYTICS_ENABLED === "true"

const GA4_MEASUREMENT_ID = "G-1BK96Q3JVW"

export const initializeGA = () => {
  if (isAnalyticsEnabled) {
    ReactGA.initialize(GA4_MEASUREMENT_ID, {
      testMode: import.meta.env.DEV
    })
    console.log(`I want to believe 🛸 ${import.meta.env.DEV ? "(testMode)" : ""}`)
  }
}

export const trackEvent = (action: string, category = "Interaction", label?: string, value?: number) => {
  if (isAnalyticsEnabled) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    })
    if (import.meta.env.DEV) {
      console.log(`Event: ${category} - ${action}`, { label, value })
    }
  }
}

export const trackPageView = (path: string) => {
  if (isAnalyticsEnabled) {
    ReactGA.send({ hitType: "pageview", page: path })
    if (import.meta.env.DEV) {
      console.log(`Page: ${path}`)
    }
  }
}