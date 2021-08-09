import * as React from 'react';

import RoundItem from "../RoundItem";

import './Rounds.less';

const Rounds = () => {
    const [state, setState] = React.useState({
        rounds: [],
        isLoading: false,
    });
    React.useEffect(() => {
        setState(prev => ({...prev, isLoading: true}));
        fetch('https://60f7b35b9cdca00017454f5e.mockapi.io/api/v1/rounds')
            .then((response) => response.json())
            .then((rounds) => setState({rounds, isLoading: false}));
    }, []);

    const { rounds } = state;
    return (
        <div className='rounds'>
            <h1 className='rounds_title'>List</h1>
            <div className='rounds_container'>
                <div className='rounds_header header'>
                    <div className='header_title'><p>Rounds</p></div>
                    <div className='header_date'><p>Date</p></div>
                </div>
                {rounds.map(round => <RoundItem round={round} />)}
            </div>
        </div>
    );
};

export default Rounds;
