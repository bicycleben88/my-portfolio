import React from "react"
import styled from "styled-components"

const Clock = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  box-shadow: 0 0 0 8px rgb(5, 5, 5), inset 0 0 0 3px rgb(250, 250, 250),
    inset 0 0 15px black;
  .face {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .hand {
    width: 50%;
    height: 5px;
    background-color: rgb(5, 5, 5);
    position: absolute;
    top: 50%;
    transform-origin: 100%;
  }
  .transition {
    transition: all 0.5s;
  }
`
export default function Clocks() {
  return (
    <div className="clocks">
      <Clock>
        <div className="face">
          <div class="hand hour-hand"></div>
          <div class="hand min-hand"></div>
          <div class="hand second-hand"></div>
        </div>
      </Clock>
      <Clock>
        <div className="face">
          <div class="hand hour-hand"></div>
          <div class="hand min-hand"></div>
          <div class="hand second-hand"></div>
        </div>
      </Clock>
      <Clock>
        <div className="face">
          <div class="hand hour-hand"></div>
          <div class="hand min-hand"></div>
          <div class="hand second-hand"></div>
        </div>
      </Clock>
    </div>
  )
}
