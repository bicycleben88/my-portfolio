import styled from "styled-components"

export const GridListStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`
export const HomeGridStyles = styled.div`
  --columns: 2;
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 800px) {
    --columns: 1;
  }
`

export const ItemsGridStyles = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`

//home page projects, builds, and pics
export const ItemStyles = styled.div`
  text-align: center;
  position: relative;
  img {
    border: 1px solid var(--pink);
    height: auto;
    font-size: 0;
  }
  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -153px;
    }
  }
  img.loading {
    --shine: white;
    --background: var(--grey);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    animation: shine 1s infinite linear;
  }
  p {
    position: absolute;
    bottom: 0;
    margin: 0;
    transform: rotate(-2deg);
    background-color: var(--pink);
    color: var(--white);
    font-size: 1.5rem;
    font-size: clamp(12px, 1.5rem, 18px);
  }
`
