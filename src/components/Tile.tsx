import * as React from 'react'
import {observer} from 'mobx-react'

@observer
export class Tile extends React.Component<{id: number, x: number, y: number}, {}> {
  render() {
    return (
      <div className='tile' style={{left: this.props.x, top: this.props.y}}>
        <img src={`/static/image/tile${this.props.id}.jpeg`}/>
      </div>
    )
  }
}