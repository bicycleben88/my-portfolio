import styled from "styled-components"

const HeaderStyles = styled.div`
  display: flex;
  width: 95%;
  margin: 5px auto;
  h1 {
    font-size: 45px;
  }
  h2 {
    margin: 5px 3px;
    font-size: 30px;
  }
  .title {
    flex: 1;
    margin-left: 10px;
  }
  img {
    box-shadow: 0px 2px 8px 1px black;
  }
  nav {
    display: flex;
    .contact,
    a {
      padding: 5px;
      font-size: 20px;
    }
    .contact {
      text-align: right;
    }
    .contact:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 250px;
      order: 2;
    }
    nav {
      .contact {
        order: 1;
        text-align: left;
      }
    }
    .title {
      h1 {
        margin-top: 10px;
      }
      h2 {
        display: none;
      }
    }
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 30px;
      text-align: center;
    }
  }
`
export default HeaderStyles
