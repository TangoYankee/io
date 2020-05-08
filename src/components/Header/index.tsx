import * as React from 'react'
import 'components/Header/index.css'

export function Header () {
  return (
    <header>
      <div className="routes">
        <a className="route" href="#about-me" title="about me">About</a>
        <a className="route" href="#projects" title="projects">Projects</a>
      </div>
    </header>
  )
}
