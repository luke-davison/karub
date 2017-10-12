import * as React from 'react'
import {observer} from 'mobx-react'

import {appState} from '../AppState'

@observer
export class ConfirmButton extends React.Component<{}, {}> {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='confirm'>
        <button className={'confirm-button'} onClick={appState.confirmTurn}>
          Confirm
        </button>
      </div>
    )
  }
}
