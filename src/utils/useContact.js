import { useContext, useState } from "react"
import PictureBookContext from "../components/PictureBookContext"
import attachImagesToPictureBook from "./attachImagesToPictureBook"

export default function useContact({ bikePics, values }) {
  const [pictureBook, setPictureBook] = useContext(PictureBookContext)
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  function addToPictureBook(selectedPic) {
    setPictureBook([...pictureBook, selectedPic])
  }

  function removeFromPictureBook(index) {
    setPictureBook([
      ...pictureBook.slice(0, index),
      ...pictureBook.slice(index + 1),
    ])
  }

  async function submitPictureBook(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)

    const body = {
      pictureBook: attachImagesToPictureBook(pictureBook, bikePics),
      name: values.name,
      email: values.email,
      query: values.query,
      role: values.role,
      mapleSyrup: values.mapleSyrup,
    }

    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_URL}/api/contactForm`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(body),
      }
    )

    const text = JSON.parse(await res.text())

    if (res.status >= 400 && res.status < 600) {
      setLoading(false)
      setError(text.message)
    } else {
      setLoading(false)
      setMessage(text.message)
    }
  }

  return {
    pictureBook,
    addToPictureBook,
    removeFromPictureBook,
    error,
    message,
    loading,
    submitPictureBook,
  }
}
