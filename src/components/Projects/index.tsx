import * as React from 'react'
import 'components/Projects/index.css'

export function Projects () {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <p>
        This page is a static site with plain html and css. By keeping it simple, it can be mobile friendly, accessible,
      and cross-browser compatible with little effort. Accessibility is checked in part using the <a title="accessibility evaluation"
          href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">WAVE</a>
      web accessibility evaluation tool.
      </p>
      {}
    </div>
  )
}

interface ProjectProps {
  linkTitle: string
  href: string
  img: string
  imgTitle: string
  imgAlt: string
  header: string
  text: string
}

const ProjectList: ProjectProps[] = [
  {
    linkTitle: 'safe browse for slack',
    href: '/safebrowse',
    img: 'images/Ssslines.ico',
    imgTitle: 'SSSlines',
    imgAlt: 'S with multiple lines',
    header: 'safebrowse for slack',
    text: "This Slack application allows users to check urls for threats reported through Google's Safe Browse API. Slack users activate the check through the /safebrowse slash command. Each user can copy in suspicious urls and safe-browse-slack will return a report of suspected threats. It is written in Node.js with Express and tested with Jest."
  }
]
