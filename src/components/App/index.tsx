import * as React from 'react'
import { AboutMe } from 'components/AboutMe'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Projects } from 'components/Projects'

export class App extends React.Component<{}, {}> {
  render () {
    return (
      <div>
        <Header/>
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    )
  }
}
