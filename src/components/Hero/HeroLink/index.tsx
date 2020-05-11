import * as React from 'react'
import 'components/Hero/HeroLink/index.css'

interface HeroLinkProps {
  class: string
  title: string
  href: string
  display: string
}

export const heroLinks: HeroLinkProps[] = [
  {
    class: 'linked-in-link',
    title: 'linkedin.com/in/timothy-m-miller/',
    href: 'https://www.linkedin.com/in/timothy-m-miller/',
    display: '/timothy-m-miller'
  },
  {
    class: 'github-link',
    title: 'github.com/tangoyankee',
    href: 'https://github.com/tangoyankee',
    display: '@tangoyankee'
  },
  {
    class: 'email-link',
    title: 'mailto:miller.tim108@gmail.com',
    href: 'mailto:miller.tim108@gmail.com',
    display: 'miller.tim108@gmail.com'
  }
]

export class HeroLink extends React.Component<HeroLinkProps, {}> {
  render () {
    return (
      <div className="contact-container">
        <span className={this.props.class} title={this.props.title} />
        <a href={this.props.href} title={this.props.title} target="_blank" rel="noopener noreferrer">{this.props.display}</a>
      </div>
    )
  }
}
