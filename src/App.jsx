import React, {useState, useEffect} from 'react';
import Game from './components/Game';
import Header from './components/Header';
import Rules from './components/Rules';
import './App.css';

function App() {

  const [playerTurn, setPlayerTurn] = useState("P1");
  const [gameStart, setGameStart] = useState(false);
  const [turnDuration, setTurnDuration] = useState(30);
  const [playerWon, setPlayerWon] = useState("");
  const [roundsWonP1, setRoundsWonP1] = useState(0);
  const [roundsWonP2, setRoundsWonP2] = useState(0);
  const [newRound, setNewRound] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [openRules, setOpenRules] = useState(false);


  const [chipsNumP1, setChipsNumP1] = useState(
    Array(21).fill(""));
  const [chipsNumP2, setChipsNumP2] = useState(
    Array(21).fill(""));

  function chipsP1(){
    let cP1 = chipsNumP1.map((value, index) => <div className="chips-P1" key={index}></div>);
    setChipsNumP1(cP1);
  };
  function chipsP2(){
    let cP2 = chipsNumP2.map((value, index) => <div className="chips-P2" key={index}></div>);
    setChipsNumP2(cP2);
  };

  function switchToP2(){
    setChipsNumP1(oldChipsNumP1 => oldChipsNumP1.splice(1));
    setPlayerTurn("P2");
    setTurnDuration(30);
  };

  function switchToP1(){
    setChipsNumP2(oldChipsNumP2 => oldChipsNumP2.splice(1));
    setPlayerTurn("P1");
    setTurnDuration(30);
  };
  
  function startGame(){
    setGameStart(true);
    setNewRound(newRound + 1);
    setPlayerWon("");
    setTurnDuration(30);
    setChipsNumP1(Array(21).fill(""));
    setChipsNumP2(Array(21).fill(""));
  };

  function endGame(){
    setGameStart(false);
  };
  
  function playerOneWon(){
    setPlayerWon("Player one wins!");
    setRoundsWonP1(roundsWonP1 + 1);
};

function playerTwoWon(){
    setPlayerWon("Player two wins!");
    setRoundsWonP2(roundsWonP2 +1);
};

function toggleRules(){
  setShowRules(!showRules);
  setOpenRules(true);
};

  function resetCountdown(){
    if(turnDuration === 0){
      setTurnDuration(30);
      if(playerTurn === "P1"){
        setPlayerTurn("P2");
      } else if((playerTurn === "P2")){
        setPlayerTurn("P1");
      };
    };
  };

  function turnCountdown(){
    setTurnDuration(turnDuration - 1);
    resetCountdown();
  };

  useEffect(() => {
    if(gameStart){
      const timer = setTimeout(turnCountdown, 1000);
      return () => clearTimeout(timer);
    }
  }, [gameStart, turnDuration]);

  useEffect(() => {
    chipsP1();
    chipsP2();
  }, [newRound]);

  return (
    <div className="App">
      <Header 
      playerTurn={playerTurn} 
      turnDuration={turnDuration}
      gameStart={gameStart}
      playerWon={playerWon}
      roundsWonP1={roundsWonP1}
      roundsWonP2={roundsWonP2}/>
      <Game 
      playerTurn={playerTurn}
      playerWon={playerWon}
      turnDuration={turnDuration}
      gameStart={gameStart}
      endGame={endGame}
      newRound={newRound}
      switchToP1={() => switchToP1()}
      switchToP2={() => switchToP2()}
      playerOneWon={() => playerOneWon()}
      playerTwoWon={() => playerTwoWon()}/>
      {openRules && (showRules ? <Rules className="rules" toggleRules={toggleRules}/>
        : <Rules className="rules close" toggleRules={toggleRules}/>)}
      <div className='table'>
        <div className='chips-P-container'>{chipsNumP1}</div>
        <div className='buttons-container'>
          {newRound > 0 ? 
          <button className='start-game-btn' onClick={startGame}>New game</button> :
          <button className='start-game-btn' onClick={startGame}>Start game</button>}
          <button className='rules-btn' onClick={toggleRules}>Rules</button>
        </div>
        <div className='chips-P-container'>{chipsNumP2}</div>
      </div>
    </div>
  )
}

export default App
