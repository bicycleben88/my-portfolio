export default function attachImagesToPictureBook(pictureBook, bikePics) {
  return pictureBook.map(pic => {
    const bikePic = bikePics.find(singlePic => singlePic.id === pic.id)
    return {
      ...pic,
      image: bikePic.image.asset.url,
      name: bikePic.name,
    }
  })
}
