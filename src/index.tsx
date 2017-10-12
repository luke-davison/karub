import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {CurrentTile} from './components/CurrentTile'
import {PlayerBoard} from './components/PlayerBoard'
import {RemainingTiles} from './components/RemainingTiles'
import {MovementToggle} from './components/MovementToggle'
import {ConfirmButton} from './components/ConfirmButton'

import {appState} from './AppState'

@observer
class App extends React.Component<{}, {}> {
    render() {
        return (
            <div id='app'>
                <CurrentTile />
                <MovementToggle />
                <ConfirmButton />
                <PlayerBoard player={appState.player}/>
                <RemainingTiles tiles={appState.remainingTiles}/>
            </div>
            
        )
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));
