import React from 'react/cjs/react-jsx-dev-runtime.development';
import './App.css';
import icons from './icons/default'
// @ts-ignore
import {kkeku} from 'some-lib/icons'

// console.log(kkeku);
const {IconSda } = icons;

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <IconSda/>
                <p>
                    Icons
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
