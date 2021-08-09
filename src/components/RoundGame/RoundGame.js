import * as React from 'react';

const RoundGame = ({data}) => {
    return (
        <table border="1" align="center" className='table'>
            {data.map(gameTr => (
                <tr className='table_tr'>
                    {gameTr.map(gameTd => gameTd.value && (
                        <td rowSpan={gameTd.rawSpan} className='table_td'>
                            <div className='td_content'>
                                <img src={`../../images/${gameTd.value}.png`}/>
                            </div>
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    );
};

export default RoundGame;
