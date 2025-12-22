import styled from "styled-components"

export const GridListStyles = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

export const HomeGridStyles = styled.div`
  --columns: 2;
  display: grid;
  gap: 2rem;
  .sampler {
    border: 2px solid var(--lightGrey);
    padding: 1.5rem;
    background: var(--white);
  }
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 800px) {
    --columns: 1;
  }
`

export const ItemsGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

export const ItemStyles = styled.div`
  text-align: center;
  position: relative;

  img {
    border: 4px solid var(--dark);
    height: auto;
    display: block;
    width: 100%;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover img {
    transform: scale(1.03);
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.5;
    }
  }

  img.loading {
    background: var(--lightGrey);
    filter: url(#grit);
    animation: pulse 1.5s infinite ease-in-out;
  }

  p {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%) rotate(-2deg);
    background-color: var(--yellow);
    color: var(--dark);
    filter: url(#grit);
    padding: 0.5rem 1.5rem;
    margin: 0;
    font-family: "Fuzzy Bubbles", cursive;
    font-size: clamp(1.4rem, 2vw, 2.2rem);
    white-space: nowrap;
    z-index: 2;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
    pointer-events: none;
  }
`
