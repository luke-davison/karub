import * as React from 'react'
import {observer} from 'mobx-react'

import {getTileAsset} from '../functions/assets'

import {appState} from '../AppState'

@observer
export class CurrentTile extends React.Component<{}, {}> {
  render() {
    return (
      <div className='current-tile'>
        <img src={getTileAsset(appState.currentTile.id)} className='tile-image' />
      </div>
    )
  }
}

