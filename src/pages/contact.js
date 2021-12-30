import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-plugin-sanity-image"
import SEO from "../components/SEO"
import ContactFormStyles from "../styles/ContactFormStyles"
import useForm from "../utils/useForm"
import BikeMenuItemStyles from "../styles/BikeMenuItemStyles"
import usePictureBook from "../utils/usePictureBook"
import PictureBook from "../components/PictureBook"

export default function ContactPage({ data }) {
  const bikePics = data.bikePics.nodes

  const { values, updateValues } = useForm({
    name: "",
    email: "",
    role: "",
    query: "",
  })

  const {
    pictureBook,
    addToPictureBook,
    removeFromPictureBook,
  } = usePictureBook({
    bikePics,
    inputs: values,
  })

  return (
    <>
      <SEO title="Contact me" />
      <ContactFormStyles>
        <fieldset>
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
        <fieldset className="menu">
          <legend>Picture Menu</legend>
          {bikePics.map(pic => (
            <BikeMenuItemStyles key={pic.id}>
              <Image {...pic.image} alt={pic.name} />
              <h2>{pic.name}</h2>
              <button
                type="button"
                onClick={() => addToPictureBook({ id: pic.id })}
              >
                Add to Picture Book
              </button>
            </BikeMenuItemStyles>
          ))}
        </fieldset>
        <fieldset className="template">
          <legend>Picture Book</legend>
          <PictureBook
            pictureBook={pictureBook}
            removeFromPictureBook={removeFromPictureBook}
            bikePics={bikePics}
          />
        </fieldset>
        <fieldset>
          <legend>Email Me your contact info & favorite pictures</legend>
          <button type="submit">Send Email</button>
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
        }
      }
    }
  }
`
