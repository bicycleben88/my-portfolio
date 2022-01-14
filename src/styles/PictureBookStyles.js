import styled from "styled-components"

const PictureBookStyles = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  position: relative;
  h2 {
    font-size: 2rem;
    align-self: center;
  }
  button {
    height: 30px;
    font-size: 2rem;
  }
  img {
    grid-column: span 2;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  .remove {
    position: absolute;
    top: -1px;
    right: -1px;
    color: var(--white);
    box-shadow: none;
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 1.25rem;
    }
    button {
      padding: 0;
      font-size: 1.5rem;
      height: 20px;
    }
  }
`

export default PictureBookStyles
