import * as React from 'react'
import 'components/Hero/HeroLink/index.css'

interface HeroLinkProps {
  class: string
  title: string
  href: string
  span: string
}

export const heroLinks: HeroLinkProps[] = [
  {
    class: 'linked-in-link',
    title: 'linkedin.com/in/timothy-m-miller/',
    href: 'https://www.linkedin.com/in/timothy-m-miller/',
    span: 'linkedin at timothy-m-miller'
  },
  {
    class: 'github-link',
    title: 'github.com/tangoyankee',
    href: 'https://github.com/tangoyankee',
    span: 'github at tangoyankee'
  },
  {
    class: 'email-link',
    title: 'mailto:miller.tim108@gmail.com',
    href: 'mailto:miller.tim108@gmail.com',
    span: 'miller.tim108@gmail.com'
  }
]

export class HeroLink extends React.Component<HeroLinkProps, {}> {
  render () {
    return (
      <span className={this.props.class} title={this.props.title}>
      <a href="#about-me">/tangoyankee</a>
      </span>
    )
  }
}
