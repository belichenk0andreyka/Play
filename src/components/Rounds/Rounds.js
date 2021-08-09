import * as React from 'react';

import RoundItem from '../RoundItem';

import './Rounds.less';

const Rounds = () => {
    const [rounds, setRounds] = React.useState([]);
    React.useEffect(async () => {
        const request = await fetch('https://60f7b35b9cdca00017454f5e.mockapi.io/api/v1/rounds');
        const rounds = await request.json();
        setRounds(rounds);
    }, []);

    return (
        <div className='rounds'>
            <h1 className='rounds_title'>List</h1>
            <div className='rounds_container'>
                <div className='rounds_header header'>
                    <div className='header_title'><p>Rounds</p></div>
                    <div className='header_date'><p>Date</p></div>
                </div>
                {rounds.map(round => <RoundItem round={round} key={round.roundId} />)}
            </div>
        </div>
    );
};

export default Rounds;
