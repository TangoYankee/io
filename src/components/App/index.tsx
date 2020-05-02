import * as React from 'react'
import { Hello } from '../Hello'


export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>Something Important!</h1>
        <Hello compiler="TypeScript" framework="React" />
      </div>
    )
  }

}
