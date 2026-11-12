const configuredUrl = import.meta.env.VITE_JSM_WINDOWS_DOWNLOAD_URL?.trim()

export const jsmWindowsDownloadUrl = (() => {
  if (!configuredUrl) return ""
  try {
    const url = new URL(configuredUrl)
    return url.protocol === "https:" ? url.href : ""
  } catch {
    return ""
  }
})()