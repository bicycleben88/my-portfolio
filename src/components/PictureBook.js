import React from "react"
import Image from "gatsby-plugin-sanity-image"
import BikeMenuItemStyles from "../styles/BikeMenuItemStyles"

export default function PictureBook({
  bikePics,
  removeFromPictureBook,
  pictureBook,
}) {
  return (
    <>
      {pictureBook.map((singlePicture, index) => {
        const pic = bikePics.find(bikePic => bikePic.id === singlePicture.id)

        return (
          <BikeMenuItemStyles key={singlePicture.id}>
            <Image {...pic.image} alt={pic.name} />
            <h2>{pic.name}</h2>
            <button
              type="button"
              className="remove"
              title={`Remove ${pic.name} from picture book`}
              onClick={() => removeFromPictureBook(index)}
            >
              &times;
            </button>
          </BikeMenuItemStyles>
        )
      })}
    </>
  )
}
