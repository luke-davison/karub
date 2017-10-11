import * as React from 'react'
import {observer} from 'mobx-react'

@observer
export class Temple extends React.Component<{x: number, y: number}, {}> {
  render() {
    return (
      <div className='temple'>
        <img src={`/static/image/templeorange.png`} className='tile-image' />
      </div>
    )
  }
}