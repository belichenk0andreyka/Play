import * as React from 'react';
import dayjs from "dayjs";

import Spinner from "../Spinner";
import RoundGame from "../RoundGame";
import { getArraysOfRoundItems } from "../../helpers/roundeHelpers";

import './RoundItem.less';

const gameState = {
    isLoading: true,
    data: [],
};

const RoundItem = ({ round }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [game, setGame] = React.useState(gameState);

    const getGame = () => {
        setGame(prev => ({ ...prev, isLoading: true }));
        fetch(`https://60f7b35b9cdca00017454f5e.mockapi.io/api/v1/round/${round.roundId}`)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => setGame({data: getArraysOfRoundItems(data, data), isLoading: false}), 2000);
            });
    };

    const handleOpen = () => {
        if (!isOpen) {
            setIsOpen(true);
            getGame();
        }
    };

    const reloadGame = () => {
        setGame(gameState);
        getGame();
    };
    return (
        <div className='round_wrapper'>
            <div className='round' onClick={handleOpen}>
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
