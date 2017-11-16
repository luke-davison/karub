import * as React from 'react'
import {observer} from 'mobx-react'

import {getTempleAsset} from '../functions/assets'
import {ITemple} from '../interfaces'

@observer
export class Temple extends React.Component<{temple: ITemple}, {}> {
  render() {
    return (
      <div className='temple'>
        <img src={getTempleAsset(this.props.temple.id)} className='tile-image' />
      </div>
    )
  }
}