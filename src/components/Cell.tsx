import * as React from 'react'
import {observer} from 'mobx-react'

import {Player} from '../interfaces'

@observer
export class Cell extends React.Component<{player: Player, x: number, y: number}, {}> {
  render() {
    const tile = this.props.player.tilePlacements.find((tile) => tile.x === this.props.x && tile.y === this.props.y)
    return (
      <div className='player-cell'>
        {tile && <img src={`/static/image/tile${tile.id}.jpeg`} className='tile-image' />}
      </div>
    )
  }
}