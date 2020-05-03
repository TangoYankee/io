import * as React from 'react'

import * as ssslines from 'img/Ssslines.ico'
import * as sparkLogo from 'img/spark-logo.png'
import * as logo36 from 'img/logo36.ico'

interface ProjectProps {
  linkTitle: string
  href: string
  imgSrc: string
  imgTitle: string
  imgAlt: string
  header: string
  text: string
}

export const projectList: ProjectProps[] = [
  {
    linkTitle: 'safe browse for slack',
    href: 'safebrowse',
    imgSrc: ssslines,
    imgTitle: 'SSSlines',
    imgAlt: 'S with multiple lines',
    header: 'safebrowse for slack',
    text: "This Slack application allows users to check urls for threats reported through Google's Safe Browse API. " +
    'Slack users activate the check through the /safebrowse slash command. Each user can copy in suspicious urls and ' +
    'safe-browse-slack will return a report of suspected threats. It is written in Node.js with Express and tested with Jest.'
  },
  {
    linkTitle: 'spark website',
    href: 'spark',
    imgSrc: sparkLogo,
    imgTitle: 'phoenix spark',
    imgAlt: 'orange phoenix silhouette',
    header: 'spark',
    text: 'The Spark website was the original website for the Travis AFB Innovation Cell. It is a Jekyll site forked ' +
    'from code.mil and styled using The U.S Web Design System. The site was intended as a collaborative tool where ' +
    'Active Duty Airmen could learn about web development and open source software by working on a live site.'
  },
  {
    linkTitle: 'fundamentals',
    href: 'fundamentals',
    imgSrc: logo36,
    imgTitle: 'tangled favicon',
    imgAlt: 'tangled black line',
    header: 'cs fundamentals',
    text: "Fundamentals is a blog of data structures and algorithms. It's a flask application that renders " +
    'markdown pages as html.'
  }
]

export class Project extends React.Component<ProjectProps, {}> {
  render () {
    return (
      <div className="project">
        <a title={this.props.linkTitle} href={'https://tangoyankee.io/' + this.props.href} target="_blank" rel="noopener noreferrer">
          <div className="project-link">
            <img src={this.props.imgSrc} title={this.props.imgTitle} alt={this.props.imgAlt} />
            <h2>{this.props.header}</h2>
          </div>
        </a>
        <p>
          {this.props.text}
        </p>
      </div>
    )
  }
}
