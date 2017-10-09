import * as React from 'react'
import {observer} from 'mobx-react'

@observer
export class Cell extends React.Component<{player: number, x: number, y: number}, {}> {
  render() {
    return (
      <img src={`/static/image/tile${3}.jpeg`} className='tile-image' />
    )
  }
}