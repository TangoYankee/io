import * as React from 'react'
import 'components/Footer/FooterLink/index.css'

export interface FooterLinkProps {
  class: string;
  title: string;
  href: string;
  span: string;
}

export const footerLinks: FooterLinkProps[] = [
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
    span: 'github at tangoyankeer'
  },
  {
    class: 'email-link',
    title: 'mailto:miller.tim108@gmail.com',
    href: 'mailto:miller.tim108@gmail.com',
    span: 'miller.tim108@gmail.com'
  }
]

export class FooterLink extends React.Component<FooterLinkProps, {}> {
  render () {
    return (
      <a className={this.props.class} title={this.props.title}
        href={this.props.href} target="_blank" rel="noopener noreferrer" >
        <span>{this.props.span}</span>
      </a>
    )
  }
}
