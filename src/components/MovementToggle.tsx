import * as React from 'react'
import {observer} from 'mobx-react'

import {appState} from '../AppState'

@observer
export class MovementToggle extends React.Component<{}, {}> {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='movement-toggle'>
        <input className='movement-toggle-button' onClick={appState.toggleMovement}/>
      </div>
    )
  }
}

