import * as React from 'react'
import 'components/Hello/index.css'

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
  render () {
    return <h1>Hello from {this.props.compiler} plus {this.props.framework}!</h1>
  }
}
