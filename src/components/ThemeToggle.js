import React, { useState, useEffect } from "react"
import styled from "styled-components"

const ToggleButton = styled.button`
  --size: 40px;
  width: var(--size);
  height: var(--size);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--yellow);
  filter: url(#grit);
  border: 2px solid var(--dark);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1) rotate(5deg);
  }

  svg {
    width: 20px;
    fill: var(--dark);
  }
`

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.setAttribute("data-theme", initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle Dark Mode">
      {theme === "light" ? (
        <svg viewBox="0 0 24 24">
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24">
          <path d="M12.12 22a10 10 0 009.13-5.93.5.5 0 00-.5-.67 8.5 8.5 0 11-10.14-10.14.5.5 0 00-.67-.5A10 10 0 0012.12 22z" />
        </svg>
      )}
    </ToggleButton>
  )
}
