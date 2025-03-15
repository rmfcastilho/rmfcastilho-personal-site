import * as React from "react"
import { HeroUIProvider } from "@heroui/react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <HeroUIProvider>
      <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory" style={pageStyles}>
        
      </main>
    </HeroUIProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
