import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface HomeProps extends RouteComponentProps<{}> {
}

export default class Home extends React.Component<HomeProps, {}> {

  public render () {
    return (
      <div>home</div>
    )
  }
}
