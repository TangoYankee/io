import * as React from 'react'
import 'components/Hero/index.css'
import { HeroLink, heroLinks } from 'components/Hero/HeroLink'
import * as portrait from 'img/portrait.jpg'

export function Hero () {
  return (
    <div className="hero">
      <HeroImg />
      <HeroContact />
    </div>
  )
}

function HeroImg () {
  return (
    <img id="portrait" src={portrait} title="Timothy Miller" alt="Portrait of Timothy Miller" />
  )
}

class HeroContact extends React.Component<{}, { showLinks: Boolean }> {
  constructor (props: any) {
    super(props)
    this.state = {
      showLinks: false
    }

    this.toggleLinks = this.toggleLinks.bind(this)
  }

  toggleLinks () {
    this.setState(state => ({ showLinks: !state.showLinks }))
  }

  render () {
    const heroItems = heroLinks.map((heroItem) =>
      <HeroLink key={heroItem.title}
        icon={heroItem.icon}
        title={heroItem.title}
        href={heroItem.href}
        display={heroItem.display}
      />
    )
    return (
      <div className={`hero-link-container ' ${this.state.showLinks ? 'active' : null}`} onClick={this.toggleLinks}>
        {heroItems}
      </div>
    )
  }
}
