import React from "react"
import SEO from "../components/SEO"

export default function contact() {
  return (
    <>
      <SEO title="Contact me" />
      <form>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="text" name="email" id="email" />
          </label>
          <label htmlFor="role">
            Role
            <input
              type="text"
              name="role"
              placeholder="Recruiter, Project Manager, etc"
              id="role"
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Inquest Info</legend>
          <label htmlFor="query">
            What can I do for you?
            <textarea id="query" name="query" />
          </label>
        </fieldset>
      </form>
    </>
  )
}
