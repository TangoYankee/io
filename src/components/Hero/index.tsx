import * as React from 'react'
import 'components/Hero/index.css'
import { HeroLink, heroLinks } from 'components/Hero/HeroLink'
import * as portrait from 'img/portrait.jpg'

<<<<<<< HEAD
export function Hero() {
=======
export function Hero () {
>>>>>>> e5298ad76bcb9abeeefb3496afcd18d257277680
  return (
    <div className="hero">
      <HeroImg />
      <HeroLinks />
    </div>
  )
}

<<<<<<< HEAD
function HeroImg() {
=======
function HeroImg () {
>>>>>>> e5298ad76bcb9abeeefb3496afcd18d257277680
  return (
    <img id="portrait" src={portrait} title="Timothy Miller" alt="Portrait of Timothy Miller" />
  )
}

<<<<<<< HEAD

function HeroLinks() {
=======
function HeroLinks () {
>>>>>>> e5298ad76bcb9abeeefb3496afcd18d257277680
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
