export default function useGameStatus(fields, endGame, playerOneWon, playerTwoWon){

    function checkFieldsP1(i){
        if(fields[i].id === "P1"){
            if(fields[i].id === fields[i + 1].id && 
                fields[i].id === fields[i + 2].id && 
                fields[i].id === fields[i  + 3].id){
                    playerOneWon();
                    endGame();
            };
        };
    };

    function checkFieldsP2(i){
        if(fields[i].id === "P2"){
            if(fields[i].id === fields[i + 1].id && 
                fields[i].id === fields[i + 2].id && 
                fields[i].id === fields[i  + 3].id){
                    playerTwoWon();
                    endGame();
            };
        };
    };
    

    for(let i = 0; i < 4; i++){
        checkFieldsP1(i);
        checkFieldsP2(i);
    };
    for(let i = 7; i < 11; i++){
        checkFieldsP1(i);
        checkFieldsP2(i);
    };
    for(let i = 14; i < 18; i++){
        checkFieldsP1(i);
        checkFieldsP2(i);
    };
    for(let i = 21; i < 25; i++){
        checkFieldsP1(i);
        checkFieldsP2(i);
    };
    for(let i = 28; i < 32; i++){
        checkFieldsP1(i);
        checkFieldsP2(i);
    };
    for(let i = 35; i < 39; i++){
        checkFieldsP1(i);
        checkFieldsP2(i);
    };

    for(let i = 0; i < fields.length; i++){
        if(fields[i].id === "P1"){
            if(fields[i].id === fields[i - 7]?.id
                && fields[i].id === fields[i - 14]?.id && 
                fields[i].id === fields[i - 21]?.id){
                    playerOneWon();
                    endGame();
            }
            else if(fields[i].id === fields[i - 6]?.id
                    && fields[i].id === fields[i - 12]?.id && 
                    fields[i].id === fields[i - 18]?.id){
                        playerOneWon();
                        endGame()
            }
            else if(fields[i].id === fields[i - 8]?.id
                && fields[i].id === fields[i - 16]?.id && 
                fields[i].id === fields[i - 24]?.id){
                    playerOneWon();
                    endGame()
            };
        }; 
        if(fields[i].id === "P2"){
            if(fields[i].id === fields[i - 7]?.id
            && fields[i].id === fields[i - 14]?.id && 
            fields[i].id === fields[i - 21]?.id){
                playerTwoWon();
                endGame();
            }
            else if(fields[i].id === fields[i - 6]?.id
                && fields[i].id === fields[i - 12]?.id && 
                fields[i].id === fields[i - 18]?.id){
                    playerTwoWon();
                    endGame();
            }
            else if(fields[i].id === fields[i - 8]?.id
                && fields[i].id === fields[i - 16]?.id && 
                fields[i].id === fields[i - 24]?.id){
                    playerTwoWon();
                    endGame();
            };
        }
    }; 
};