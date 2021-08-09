import * as React from 'react';
import dayjs from 'dayjs';

import Spinner from '../Spinner';
import RoundGame from '../RoundGame';
import { getArraysOfRoundItems } from '../../helpers/roundeHelpers';

import './RoundItem.less';

const INIT_GAME_STATE = {
    isLoading: true,
    data: [],
};

const RoundItem = ({ round }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [game, setGame] = React.useState(INIT_GAME_STATE);

    const getGame = async () => {
        setGame(prev => ({ ...prev, isLoading: true }));
        const request = await fetch(`https://60f7b35b9cdca00017454f5e.mockapi.io/api/v1/round/${round.roundId}`);
        const response = await request.json();
        setTimeout(() => setGame({data: getArraysOfRoundItems(response), isLoading: false}), 1500);
    };

    const handleOpenGame = () => {
        if (!isOpen) {
            setIsOpen(true);
            getGame();
        }
    };

    const reloadGame = () => {
        setGame(INIT_GAME_STATE);
        getGame();
    };
    return (
        <div className='round_wrapper'>
            <div className='round' onClick={handleOpenGame}>
                <div className='round_title'><p>{round.roundId}</p></div>
                <div className='round_date'><p>{dayjs(round.dateTime).format('MM/DD/YYYY, h:m:s A')}</p></div>
                {isOpen && <img className='round_reload' src='../../images/reload.png' onClick={reloadGame} />}
            </div>
            {isOpen && (
                <div className='game'>
                    { !game.isLoading ? <RoundGame data={game.data} /> : <Spinner />}
                </div>
            )}
        </div>
    );
};

export default RoundItem;
