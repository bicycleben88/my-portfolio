import styled from "styled-components"

const BikeMenuItemStyles = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 1fr 1fr;
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
    grid-row: span 2;
    height: 100px;
    width: 100%;
    object-fit: cover;
  }
  .remove {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5;
    color: var(--white);
  }
`

export default BikeMenuItemStyles
