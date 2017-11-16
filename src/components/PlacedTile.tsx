import * as React from 'react'
import {observer} from 'mobx-react'

import {getTileAsset, getGemAsset} from '../functions/assets'
import {ITile} from '../interfaces'

@observer
export class PlacedTile extends React.Component<{tile: ITile}, {}> {
  render() {
    return (
      <div className='temple'>
        <img src={getTileAsset(this.props.tile.id)} className='tile-image' />
        {this.props.tile.gem && <img src={getGemAsset(this.props.tile.gem)} className='tile-gem' />}
      </div>
    )
  }
}