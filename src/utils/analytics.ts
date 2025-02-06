import ReactGA from "react-ga4"

const isAnalyticsEnabled = import.meta.env.VITE_GOOGLE_ANALYTICS_ID

export const initializeGA = () => {
  if (isAnalyticsEnabled) {
    ReactGA.initialize(isAnalyticsEnabled, {
      testMode: import.meta.env.DEV
    })
    console.log(`I want to believe 🛸 ${import.meta.env.DEV ? `- TestMode - Using: '${isAnalyticsEnabled}'` : ""}`)
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
  let normalizedPath = path
  if (normalizedPath.startsWith("/MiPresion")) {
    normalizedPath = normalizedPath.replace("/MiPresion", "") || "/"
  }
  if (isAnalyticsEnabled) {
    ReactGA.send({ hitType: "pageview", page: normalizedPath })
    if (import.meta.env.DEV) {
      console.log(`Page: ${normalizedPath}`)
    }
  }
}