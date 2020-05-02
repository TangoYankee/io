import * as React from 'react'
import './index.css'

export interface FooterLinkProps {
  class: string;
  title: string;
  href: string;
  span: string;
}

export class FooterLink extends React.Component<FooterLinkProps, {}> {
  render () {
    return (
      <a className={this.props.class} title={this.props.title}
        href={this.props.href} target="_blank">
        <span>{this.props.span}</span>
      </a>
    )
  }
}
