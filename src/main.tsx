import React from "react"
import ReactDOM from "react-dom/client"
import { MotionConfig } from "motion/react"
import "./i18n"
import "@fontsource-variable/manrope"
import "./index.css"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user"><App /></MotionConfig>
  </React.StrictMode>,
)