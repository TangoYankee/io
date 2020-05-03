import * as React from 'react'
import { Hello } from 'components/Hello'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
 
export class App extends React.Component<{}, {}> {
  render () {
    return (
      <div>
        <Header/>
        <Hello compiler="TypeScript" framework="React" />
        <Footer />
      </div>
    )
  }
}
