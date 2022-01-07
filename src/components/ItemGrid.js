import React from "react"
import { ItemsGridStyles, ItemStyles } from "../styles/GridStyles"

export default function ItemGrid({ items }) {
  return (
    <ItemsGridStyles>
      {items.map(item => (
        <ItemStyles key={item._id}>
          <p>{item.name}</p>
          <img
            width="500"
            height="400"
            src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
            alt={item.name}
            style={{
              background: `url(${item.image.asset.metadata.lqip})`,
              backgroundSize: "cover",
            }}
          />
        </ItemStyles>
      ))}
    </ItemsGridStyles>
  )
}
