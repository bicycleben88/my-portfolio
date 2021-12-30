import React, { useState, createContext } from "react"

const PictureBookContext = createContext()

export function PictureBookProvider({ children }) {
  const [pictureBook, setPictureBook] = useState([])
  return (
    <PictureBookContext.Provider value={[pictureBook, setPictureBook]}>
      {children}
    </PictureBookContext.Provider>
  )
}

export default PictureBookContext
