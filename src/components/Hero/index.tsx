import * as React from 'react'
import 'components/Hero/index.css'
import { HeroLink, heroLinks } from 'components/Hero/HeroLink'
import * as portrait from 'img/portrait.jpg'

export function Hero() {
  return (
    <div className="hero">
      <HeroImg />
      <HeroLinks />
    </div>
  )
}

function HeroImg() {
  return (
    <img id="portrait" src={portrait} title="Timothy Miller" alt="Portrait of Timothy Miller" />
  )
}


function HeroLinks() {
  const heroItems = heroLinks.map((heroItem) =>
    <HeroLink key={heroItem.title}
      class={heroItem.class}
      title={heroItem.title}
      href={heroItem.href}
      span={heroItem.span}
    />
  )
  return (
    <div className='hero-link-container'>
      {heroItems}
    </div>
  )
}
