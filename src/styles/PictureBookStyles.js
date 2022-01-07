import styled from "styled-components"

const PictureBookStyles = styled.div`
  display: grid;
  gap: 1rem;
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
  }
`

export default PictureBookStyles
