import React from 'react';


function Header(props) {

    const {playerTurn, turnDuration, gameStart, playerWon, roundsWonP1, roundsWonP2} = props;

    return (
        <header className='header'>
            <div className='player1'>
                <div className='smile-container SC1'>
                    <div className='smile S1'>
                        <div className='eye-container'>
                            <div className='eye EP1'><div className="eyelid"></div></div>
                            <div className='eye EP1'><div className="eyelid"></div></div>
                        </div>
                    </div>
                </div>
                {playerWon === "Player one wins!" ?
                <img 
                className="fireworks"
                src="https://gifimage.net/wp-content/uploads/2017/11/fireworks-gif-transparent-6.gif"
                alt="fireworks image" /> :
                <>
                    <h3>Player 1</h3>
                    <h4>Score:</h4>
                    <h4>{roundsWonP1}</h4>
                </>}
            </div>
            
            <div className='player2'>
                <div className='smile-container SC2'>
                    <div className='smile S2'>
                        <div className='eye-container'>
                            <div className='eye EP2'><div className="eyelid ELP2"></div></div>
                            <div className='eye EP2'><div className="eyelid ELP2"></div></div>
                        </div>
                    </div>
                </div>
                {playerWon === "Player two wins!" ?
                <img 
                className="fireworks"
                src="https://gifimage.net/wp-content/uploads/2017/11/fireworks-gif-transparent-6.gif"
                alt="fireworks image" /> :
                <>
                <h3>Player 2</h3>
                <h4>Score: </h4>
                <h4>{roundsWonP2}</h4>
                </>}
            </div>
        </header>
    );
    }

export default Header;