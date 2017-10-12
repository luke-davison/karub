import * as React from 'react'
import {observer} from 'mobx-react'

import {appState} from '../AppState'

@observer
export class CurrentTile extends React.Component<{}, {}> {
  render() {
    return (
      <div className='current-tile'>
        <img src={`/static/image/tile${appState.currentPlacement.tile.id}.jpeg`} className='tile-image' />
      </div>
    )
  }
}

