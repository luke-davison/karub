import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {PlayerBoard} from './components/PlayerBoard'

@observer
class App extends React.Component<{}, {}> {
    render() {
        return (
            <PlayerBoard player={1} />
        )
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));
