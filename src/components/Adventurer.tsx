import * as React from 'react'
import {observer} from 'mobx-react'

import {IAdventurer} from '../interfaces'
import {getAdventurerAsset} from '../functions/assets'

@observer
export class Adventurer extends React.Component<{adventurer: IAdventurer}, {}> {
  render() {
    return (
      <div className='adventurer'>
        <img src={getAdventurerAsset(this.props.adventurer.id)} className='tile-image' />
      </div>
    )
  }
}