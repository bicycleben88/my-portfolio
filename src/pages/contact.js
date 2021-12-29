import React from "react"
import SEO from "../components/SEO"
import ContactFormStyles from "../styles/ContactFormStyles"
import useForm from "../utils/useForm"

export default function Contact() {
  const { values, updateValues } = useForm({
    name: "",
    email: "",
    role: "",
    query: "",
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
              placeholder="Recruiter, Project Manager, etc"
              id="role"
              value={values.role}
              onChange={updateValues}
            />
          </label>
        </fieldset>
        <fieldset class="query">
          <legend>Inquest Info</legend>
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
        <fieldset class="template">
          <legend>Email Template</legend>
        </fieldset>
      </ContactFormStyles>
    </>
  )
}
