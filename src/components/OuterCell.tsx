import * as React from 'react'
import {observer} from 'mobx-react'

import {Player} from '../interfaces'

import {appState} from '../AppState'

@observer
export class OuterCell extends React.Component<{player: Player, x: number, y: number}, {}> {
  render() {
    let classNames: string = ''
    if (this.props.x === 0 || this.props.x === 7) {
      classNames += ' vertical'
    }
    if (this.props.y === 0 || this.props.y === 6) {
      classNames += ' horizontal'
    }
    const adventurer = this.props.player.adventurers.find(adventurer => adventurer.position.x === this.props.x && adventurer.position.y === this.props.y)
    const temple = appState.templePositions.find(temple => temple.x === this.props.x && temple.y === this.props.y)
    return (
      <div className={'player-outer-cell' + classNames}>
        {adventurer && <img src={`/static/image/templeorange.png`} className='adventurer-image' />}
        {temple && <img src={`/static/image/templeorange.png`} className='temple-image' />}
      </div>
    )
  }
}