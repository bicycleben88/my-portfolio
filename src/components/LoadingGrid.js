import React from "react"
import { ItemsGridStyles, ItemStyles } from "../styles/GridStyles"

export default function LoadingGrid({ count }) {
  return (
    <ItemsGridStyles>
      {Array.from({ length: count }, (_, i) => (
        <ItemStyles key={`loading-${i}`}>
          <p>Loading...</p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            height="400"
            width="500"
            alt="loading"
            className="loading"
          />
        </ItemStyles>
      ))}
    </ItemsGridStyles>
  )
}
