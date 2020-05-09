import * as React from 'react'
import { AboutMe } from 'components/AboutMe'
import { Header } from 'components/Header'
import { Hero } from 'components/Hero'
import { Projects } from 'components/Projects'
import { Footer } from 'components/Footer'

export class App extends React.Component<{}, {}> {
  render () {
    return (
      <div>
        <Header />
        <Hero/>
        <AboutMe />
        <Projects />
      </div>
    )
  }
}
