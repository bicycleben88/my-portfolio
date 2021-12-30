import { useContext } from "react"
import PictureBookContext from "../components/PictureBookContext"

export default function usePictureBook({ bikePics, inputs }) {
  const [pictureBook, setPictureBook] = useContext(PictureBookContext)

  function addToPictureBook(selectedPic) {
    setPictureBook([...pictureBook, selectedPic])
  }

  function removeFromPictureBook(index) {
    setPictureBook([
      ...pictureBook.slice(0, index),
      ...pictureBook.slice(index + 1),
    ])
  }

  return {
    pictureBook,
    addToPictureBook,
    removeFromPictureBook,
  }
}
