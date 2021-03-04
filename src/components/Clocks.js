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
  const [seconds, setSeconds] = React.useState(null)
  const [minutes, setMinutes] = React.useState(null)
  const [hour, setHour] = React.useState(null)

  const css = {
    seconds: { transform: `rotate(${(seconds / 60) * 360 + 90}deg)` },
    minutes: { transform: `rotate(${(minutes / 60) * 360 + 90}deg)` },
    hour: { transform: `rotate(${(hour / 12) * 360 + 90}deg)` },
  }

  function getSeconds() {
    setInterval(() => {
      const date = new Date()
      const seconds = date.getSeconds()
      setSeconds(seconds)
    }, 1000)
  }

  function getMinutes() {
    setInterval(() => {
      const date = new Date()
      const minutes = date.getMinutes()
      setMinutes(minutes)
    }, 1000)
  }

  function getHour() {
    setInterval(() => {
      const date = new Date()
      const hour = date.getHours()
      setHour(hour)
    }, 1000)
  }

  React.useEffect(() => {
    getSeconds()
    getMinutes()
    getHour()
  }, [])

  return (
    <div className="clocks" id="clocks">
      <Clock>
        <div className="face">
          <div class="hand hour-hand" style={css.hour}></div>
          <div class="hand min-hand" style={css.minutes}></div>
          <div class="hand second-hand" style={css.seconds}></div>
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
