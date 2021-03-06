import React from "react"
import styled from "styled-components"

const VarsBarStyles = styled.section`
  display: flex;
  justify-content: space-between;
`

export default function VarsBar() {
  const [cssVars, setCssVars] = React.useState({
    tilt: 0,
    slide: 0,
  })

  function handleChange(e) {
    setCssVars({ ...cssVars, [e.target.name]: parseInt(e.target.value) })
    document.documentElement.style.setProperty(
      `--${e.target.name}`,
      cssVars[e.target.name]
    )
    console.log(e.target.name)
    console.log(cssVars[e.target.name])
  }

  return (
    <VarsBarStyles>
      <label>
        Tilt{" "}
        <input
          type="range"
          value={cssVars.tilt}
          name="tilt"
          min="-11"
          max="1"
          onChange={handleChange}
        />
      </label>
      <label>
        Slide{" "}
        <input
          type="range"
          value={cssVars.slide}
          name="slide"
          min="-51"
          max="51"
          onChange={handleChange}
        />
      </label>
    </VarsBarStyles>
  )
}
