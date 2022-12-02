import React, {useState, useEffect} from 'react';

function Rules(props){

    const [scenarios, setScenarios] = useState([true, false, false]);
    const [img, setImg] = useState(0);
    const  {className, toggleRules} = props;

    function nextImg(){
        if(img < 2){
            setImg(img + 1);
        }else setImg(0);
    };

    function prevImg(){
        if(img > 0){
            setImg(img - 1);
        }else setImg(2);
    };

    useEffect(() => {
        setScenarios(scenarios.map( (value,index) => {
            if(index == img){
                return value = true;
            } else return value = false;
        }))
    }, [img]);

    return (
        <main className={className}>
            <div className='x' onClick={() => toggleRules()}>x</div>
            <ul>
                <h3 className='rules-title'>How to play:</h3>
                <li>Decide who will go first.</li>
                <li>Player 1 drops a coin into any of the slots at the top of the grid.</li>
                <li>Player 2 drops a coin into any of the slots at the top of the grid.</li>
                <li>
                    Each player has 30 sec to play his move before 
                    turn is switched to the other player.
                </li>
                <li>
                    Players will alternate turns in this manner until someone gets 
                    four-in-a-row vertically, horizontally, or diagonally as shown
                    in below scenarios.
                </li>
            </ul>
            <div className='img-container'>
                <i className="fa-solid fa-less-than" onClick={prevImg}></i>
                {scenarios[0] && <img src="images/win1.png" alt="win scenario 1" />}
                {scenarios[1] && <img src="images/win2.png" alt="win scenario 2" />}
                {scenarios[2] && <img src="images/win3.png" alt="win scenario 3" />}
                <i className="fa-solid fa-greater-than" onClick={nextImg}></i>
            </div>
        </main>
    )
}

export default Rules;