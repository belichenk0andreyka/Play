import React from 'react';
import ReactDOM from 'react-dom';

import Rounds from "./components/Rounds";

import './index.less';

const App = () => {
    return (
        <div className='app'>
            <Rounds />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
