import * as React from 'react'
import 'components/Header/index.css'
import * as portrait from 'img/portrait.jpg'

export function Header () {
  return (
    <header>
      <img id="portrait" src={portrait} title="Timothy Miller" alt="Portrait of Timothy Miller" />
    </header>
  )
}
