import * as React from 'react';
import { ICentralizedp1Props } from './ICentralizedp1Props';
import { escape } from '@microsoft/sp-lodash-subset';
import Centralizedp from './Richtexteditor';

export default class Centralizedp1 extends React.Component<ICentralizedp1Props, {}> {
  public render(): React.ReactElement<ICentralizedp1Props> {
   
    return (
        <div>
          Hello Anubhav
          <Centralizedp/>
        </div>
    );
  }
}
