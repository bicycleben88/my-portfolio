import styled from "styled-components"

const FooterStyles = styled.div`
  display: flex;
  border-top: 2px solid black;
  width: 95%;
  margin: 0 auto;
  h5 {
    margin: 4px;
  }
  @media (max-width: 500px) {
    justify-content: center;
    h5 {
      margin: 2px;
      font-size: smaller;
    }
  }
`

export default FooterStyles
