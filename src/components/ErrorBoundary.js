import React from 'react'
import {reportError} from '../api'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
    reportError(error, info)
  }

  tryAgain() {

  }

  render() {
    return this.state.hasError ? (
      <div>
        <div role="alert">There was a problem.</div>{' '}
        <button onClick={this.tryAgain}>Try again?</button>
      </div>
    ) : (
      this.props.children
    )
  }
}

export {ErrorBoundary}
