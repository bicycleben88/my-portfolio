import styled from "styled-components"
import imageBike from "../images/dirt_road.jpg"

const HeaderStyles = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  align-items: center;
  width: 95%;
  height: 400px;
  margin: 5px auto;
  color: white;
  background-image: url(${imageBike});
  background-repeat: no-repeat;
  background-position: center;
  a {
    color: white;
  }
  h1 {
    font-size: 55px;
  }
  h2 {
    margin: 5px 3px;
    font-size: 40px;
  }
  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 75px;
    h3 {
      margin: 1px;
    }
  }
  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 250px;
      order: 2;
    }
    .title {
      text-align: center;
      h1 {
        margin-top: 10px;
      }
    }
  }
  @media (max-width: 825px) {
    height: 300px;
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 20px;
    }
    nav {
      flex-direction: column;
      justify-content: space-evenly;
      height: 100px;
    }
  }
`
export default HeaderStyles
