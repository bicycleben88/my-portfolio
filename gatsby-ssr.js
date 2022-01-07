import React from "react"
import Layout from "./src/components/Layout"
import { PictureBookProvider } from "./src/components/PictureBookContext"
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <PictureBookProvider>{element}</PictureBookProvider>
}
