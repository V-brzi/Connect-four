import React,{useEffect, useState} from "react";
import useGameStatus from "../customHooks/useGameStatus";
import useDisplayFields from "../customHooks/useDisplayFields";
import displayFields from "../customHooks/useDisplayFields";
import Swipe from "react-easy-swipe";


function Game(props){

    const {playerTurn, playerWon, turnDuration, gameStart, endGame, newRound, switchToP1, switchToP2, playerOneWon, playerTwoWon} = props;
    const [fields, setFields] = useState(useDisplayFields());
    const [placeHolders, setPlaceHolders] = useState([true,false,false,false,false,false,false]);

    function column(e){

        let col = [];

        fields.forEach(field => {
            if(field.id == e.target.id){
                col.push(field);
            };
        });

        if(playerTurn === "P1" && col.length !== 0){
            setPlaceHolders[false, false, false, false, false, false, true];
            switchToP2();
        } else if((playerTurn === "P2" && col.length !== 0)){
            setPlaceHolders[true, false, false, false, false, false, false];
            switchToP1();
        };

        
        setFields(fields.map(field => {
            if(field.key == col[col.length - 1]?.key){
                return {
                    html: 
                    <div className="field" key={field.key}>
                        <div className={playerTurn}></div>
                    </div>,
                    id: playerTurn,
                    key: field.key
                }
            }
            else if(field.id === "P1" || field.id === "P2"){
                return field;
            }
            else return {...field, 
                        html: 
                        <div className="field" key={field.key}>
                            <div className="empty-field"></div>
                        </div>};
        }));
    };
    
    const displayPlaceHolder = placeHolders.map((value, index) =>{
        const placeHolder = value ? 
        <div 
            className={`col-pick${playerTurn}`}
            onClick={e => {e.preventDefault();
                column(e)}}
            key={index}
            id={index}>{turnDuration}</div> :
        <div 
            onMouseEnter={e => {e.preventDefault();
                change(e)}} 
            key={index}
            id={index}></div>;
        return placeHolder;
    });

    function change(e){
        setPlaceHolders(displayPlaceHolder.map(placeholder => {
            if(placeholder.key == e.target.id && e.target.id == fields[e.target.id].key){
                return true;
            } else return false;
        }));
    };

    useEffect(() => {
        useGameStatus(fields, endGame, playerOneWon, playerTwoWon);
    }, [fields]);

    useEffect(() => {
        setFields(displayFields());
    }, [newRound]);

    return (
        <div className="game-container">
            {playerWon !== "" ? 
            <div className="game-won">{playerWon}</div> :
            gameStart && <div className="placeholder">{displayPlaceHolder}</div>}
            <div className="game">
                <div className="game-table">
                    {fields.map(field => field.html)}
                </div>
                <div className="game-stand"></div>
            </div>
        </div>
    )
}

export default Game;