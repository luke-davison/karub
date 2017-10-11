import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {PlayerBoard} from './components/PlayerBoard'
import {RemainingTiles} from './components/RemainingTiles'

import {appState} from './AppState'

@observer
class App extends React.Component<{}, {}> {
    render() {
        return (
            <div id='app'>
                {appState.players.map((player) => <PlayerBoard player={player}/>)}
                <RemainingTiles tiles={appState.remainingTiles}/>
            </div>
            
        )
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));
