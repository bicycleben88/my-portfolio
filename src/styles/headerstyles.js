import styled from "styled-components"

const HeaderStyles = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin: 5px auto;
  div {
    flex: 1;
    margin-left: 5px;
  }
  img {
    box-shadow: 0px 2px 8px 1px black;
  }
  nav {
    display: flex;
    div {
      padding: 5px;
      font-size: 20px;
    }
  }
`
export default HeaderStyles
