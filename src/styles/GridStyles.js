import styled from "styled-components"

export const GridListStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`
export const HomeGridStyles = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
`

export const ItemsGridStyles = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`
