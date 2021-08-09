import * as React from 'react';

const RoundGame = ({data}) => {
    return (
        <table border="1" align="center" className='table'>
            {data.map((gameTr, trIndex) => (
                <tr className='table_tr' key={trIndex}>
                    {gameTr.map((gameTd, tdIndex) => gameTd.value && (
                        <td rowSpan={gameTd.rawSpan} className='table_td' key={tdIndex}>
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
