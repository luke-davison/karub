import * as React from 'react'
import {observer} from 'mobx-react'

import {IPlayer} from '../interfaces'

import {Adventurer} from './Adventurer'
import {Temple} from './Temple'

import {appState} from '../AppState'

@observer
export class OuterCell extends React.Component<{player: IPlayer, x: number, y: number}, {}> {
  render() {
    let classNames: string = ''
    if (this.props.x === 0 || this.props.x === 7) {
      classNames += ' vertical'
    }
    if (this.props.y === 0 || this.props.y === 6) {
      classNames += ' horizontal'
    }
    const adventurer = this.props.player.adventurers.find(adventurer => adventurer.position.x === this.props.x && adventurer.position.y === this.props.y)
    const temple = this.props.player.temples.find(temple => temple.position.x === this.props.x && temple.position.y === this.props.y)
    return (
      <div className={'player-outer-cell' + classNames}>
        {adventurer && <Adventurer adventurer={adventurer} />}
        {temple && <Temple temple={temple} />}
      </div>
    )
  }
}