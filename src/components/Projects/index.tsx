import * as React from 'react'
import 'components/Projects/index.css'

import { Project, projectList } from 'components/Projects/Project'

export function Projects () {
  const projectItems = projectList.map(project =>
    <Project key={project.header}
      linkTitle={project.linkTitle}
      href={project.href}
      imgSrc={project.imgSrc}
      imgTitle={project.imgTitle}
      imgAlt={project.imgAlt}
      header={project.header}
      text={project.text}
    />
  )

  return (
    <div id="projects">
      <h1>Projects</h1>
      <p>
        This site is written in React with Typescript and bundled together with Webpack. Its minimalist presentation means it can be mobile friendly, accessible,
      and cross-browser compatible with little effort. Accessibility is checked in part using the <a title="accessibility evaluation"
          href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">WAVE</a> web accessibility evaluation tool.
          Hosting for this site, as well as the projects listed below, is provided by a single Amazon EC2 instance. Each website is hosted in its own docker container
          on a separate port. An NGINX server routes traffic the to correct port based on the site path.
      </p>
      <div className="project-list">
        {projectItems}
      </div>
    </div>
  )
}
