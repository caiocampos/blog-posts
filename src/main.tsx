import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./main.css"
import { RouteManager } from "@/routing/route-manager"
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouteManager />
    </ThemeProvider>
  </StrictMode>
)
