import * as React from 'react'
import 'components/Hero/HeroLink/index.css'
import * as linkedInIcon from 'img/linkedin-logo.png';
import * as githubIcon from 'img/GitHub-Mark-64px.png';
import * as emailIcon from 'img/baseline_email_black_18dp.png';

interface HeroLinkProps {
  icon: string
  title: string
  href: string
  display: string
}

export const heroLinks: HeroLinkProps[] = [
  {
    icon: linkedInIcon,
    title: 'linkedin.com/in/timothy-m-miller/',
    href: 'https://www.linkedin.com/in/timothy-m-miller/',
    display: '/timothy-m-miller'
  },
  {
    icon: githubIcon,
    title: 'github.com/tangoyankee',
    href: 'https://github.com/tangoyankee',
    display: '@tangoyankee'
  },
  {
    icon: emailIcon,
    title: 'mailto:miller.tim108@gmail.com',
    href: 'mailto:miller.tim108@gmail.com',
    display: 'miller.tim108@gmail.com'
  }
]

export class HeroLink extends React.Component<HeroLinkProps, {}> {
  render () {
    return (
      <div className="contact-container">
        <img className="contact-icon" src={this.props.icon} alt="icon"/>
        <a href={this.props.href} title={this.props.title} target="_blank" rel="noopener noreferrer">{this.props.display}</a>
      </div>
    )
  }
}
