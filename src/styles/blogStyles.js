import styled from "styled-components"

const BlogStyles = styled.section`
  width: 70%;
  margin: 5px auto;
  background-color: rgba(0, 0, 0, 0.2);
  border-top: 25px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 5px;
  article {
    background-color: rgba(255, 255, 255, 0.6);
    border-top: 5px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding-left: 2px;
  }
  article h2 {
    margin-top: 1px;
  }
  /* #blogs {
    transform: perspective(500px) rotateY(calc(var(--tilt) * 1deg));
    transition: transform 0.3s;
  } */
`

export default BlogStyles
