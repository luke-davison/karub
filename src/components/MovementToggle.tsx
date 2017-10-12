import * as React from 'react'
import {observer} from 'mobx-react'

import {appState} from '../AppState'

@observer
export class MovementToggle extends React.Component<{}, {}> {
  constructor() {
    super()
  }

  render() {
    let className = ''
    if (appState.movementToggled) {
      className += ' toggled'
    }
    return (
      <div className='movement-toggle'>
        <button className={'movement-toggle-button' + className} onClick={appState.toggleMovement}>
          {appState.movementToggled && 'Place a Tile Instead'}
          {!appState.movementToggled && 'Move an Adventurer Instead'}
        </button>
      </div>
    )
  }
}

