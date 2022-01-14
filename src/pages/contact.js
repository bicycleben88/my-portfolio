import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-plugin-sanity-image"
import SEO from "../components/SEO"
import ContactFormStyles from "../styles/ContactFormStyles"
import useForm from "../utils/useForm"
import PictureBookStyles from "../styles/PictureBookStyles"
import useContact from "../utils/useContact"
import PictureBook from "../components/PictureBook"

export default function ContactPage({ data }) {
  const bikePics = data.bikePics.nodes

  const { values, updateValues } = useForm({
    name: "",
    email: "",
    role: "",
    query: "",
    mapleSyrup: "",
  })

  const {
    pictureBook,
    addToPictureBook,
    removeFromPictureBook,
    error,
    loading,
    message,
    submitPictureBook,
  } = useContact({
    bikePics,
    values,
  })

  if (message) {
    return <p>{message}</p>
  }

  return (
    <>
      <SEO title="Contact me" />
      <ContactFormStyles onSubmit={submitPictureBook}>
        <fieldset disabled={loading}>
          <legend>Your Info</legend>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValues}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              id="email"
              value={values.email}
              onChange={updateValues}
            />
            <input
              type="text"
              name="mapleSyrup"
              id="mapleSyrup"
              value={values.mapleSyrup}
              onChange={updateValues}
              className="maple-syrup"
            />
          </label>
          <label htmlFor="role">
            Role
            <input
              type="text"
              name="role"
              placeholder="Recruiter, Project Manager, Best Friend, etc"
              id="role"
              value={values.role}
              onChange={updateValues}
            />
          </label>
          <label htmlFor="query">
            What can I do for you?
            <textarea
              id="query"
              name="query"
              value={values.query}
              onChange={updateValues}
            />
          </label>
        </fieldset>
        <fieldset className="menu" disabled={loading}>
          <legend>Picture Menu</legend>
          {bikePics.map(pic => (
            <PictureBookStyles key={pic.id}>
              <Image {...pic.image} alt={pic.name} />
              <h2>{pic.name}</h2>
              <button
                type="button"
                onClick={() => addToPictureBook({ id: pic.id })}
              >
                Add
              </button>
            </PictureBookStyles>
          ))}
        </fieldset>
        <fieldset className="picture-book" disabled={loading}>
          <legend>Picture Book</legend>
          <PictureBook
            pictureBook={pictureBook}
            removeFromPictureBook={removeFromPictureBook}
            bikePics={bikePics}
          />
        </fieldset>
        <fieldset disabled={loading}>
          <legend>Email me your contact info & favorite pictures</legend>
          {error && <p>{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Sending Email..." : "Send Email"}
          </button>
        </fieldset>
      </ContactFormStyles>
    </>
  )
}

export const query = graphql`
  query {
    bikePics: allSanityBikePictures {
      nodes {
        name
        id
        image {
          ...ImageWithPreview
          asset {
            url
          }
        }
      }
    }
  }
`
