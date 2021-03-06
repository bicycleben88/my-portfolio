import React from "react"
import styled from "styled-components"
import Clock from "../components/Clock"

const ClocksStyles = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px 0;
  margin-bottom: 15px;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`

export default function Clocks() {
  return (
    <ClocksStyles id="clocks">
      <Clock city="New York" />
      <Clock city="Paris" />
      <Clock city="Honolulu" />
    </ClocksStyles>
  )
}
