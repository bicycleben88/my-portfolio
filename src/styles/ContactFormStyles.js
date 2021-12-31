import styled from "styled-components"

const ContactFormStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  input,
  textarea {
    width: 100%;
  }
  input:focus,
  textarea:focus {
    outline: 1px solid var(--pink);
  }
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
    &.template,
    &.menu {
      grid-column: span 1;
    }
  }
  .maple-syrup {
    display: none;
  }
  @media (max-width: 900px) {
    fieldset.template,
    fieldset.menu {
      grid-column: span 2;
    }
  }
`

export default ContactFormStyles
