const latestReleaseUrl = "https://github.com/HyperDataLab/jsm-landing/releases/latest/download/JSM-Setup.exe"
const configuredUrl = import.meta.env.VITE_JSM_WINDOWS_DOWNLOAD_URL?.trim()

export const jsmWindowsDownloadUrl = (() => {
  if (!configuredUrl) return latestReleaseUrl
  try {
    const url = new URL(configuredUrl)
    return url.protocol === "https:" ? url.href : latestReleaseUrl
  } catch {
    return latestReleaseUrl
  }
})()
