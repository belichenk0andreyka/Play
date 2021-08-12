import * as React from 'react';

import './RoundGame.less';

const RoundGame = ({data}) => {
    const getPositionOfImg = (rawSpan, tdIndex) => {
        if (rawSpan > 1 && tdIndex <= 1) {
            return 'td_img__bottom';
        } else if (rawSpan > 1 && tdIndex >= 2) {
            return 'td_img__top';
        }
    };
    return (
        <table border="1" align="center" className='table'>
            <tbody>
                {data.map((gameTr, trIndex) => (
                    <tr className='table_tr' key={trIndex}>
                        {gameTr.map((gameTd, tdIndex) => gameTd.value && (
                            <td rowSpan={gameTd.rawSpan} className='table_td' key={tdIndex}>
                                <div className={`td_content ${gameTd.rawSpan > 1 ? 'td_content__background' : ''}`}>
                                    <img src={`../../images/${gameTd.value}.png`} className={getPositionOfImg(gameTd.rawSpan, tdIndex)} />
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RoundGame;
