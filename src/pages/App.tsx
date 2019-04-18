import * as React from 'react'

class App extends React.Component<{}, {}> {

  public renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default
      return (<DevTools />)
    }
    return null
  }

  public render() {
    return (
      <div className="main">
        {this.props.children}
        {this.renderDevTool()}
      </div>
    )
  }
}

export default App
