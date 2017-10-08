import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Tile} from './components/Tile'

@observer
class App extends React.Component<{}, {}> {
    render() {
        return (
            <Tile id={1} x={50} y={50} />
        )
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));
