import { useEffect, useState } from "react";
import { STATUSES, WINNING_CASES } from "../../constants/TTTconstants";
import StatusBar from "../StatusBar/StatusBar";
import './TicTacToe.css';

function TicTacToe() {

    const [player, setPlayer] = useState('o');
    const [status, setStatus] = useState('');
    const [board, setBoard] = useState(['','','','','','','','','']);
    const [isWon, setIsWon] = useState(false);

    useEffect(() => {
        checkWinning();

        if(!isWon) {
            setPlayer( player === 'x' ? 'o' : 'x');
        }

    }, [board]);

    
    const updateBoard = (e) => {

        let updatedBoard = board.map((cell, index) => {
            if(index === +e.target.id) { 
                cell = player;
            }
            return cell;
        });

        setBoard(updatedBoard);
    }

    const checkWinning = () => {
        
        WINNING_CASES.forEach(combination => {

            let cell1 = board[combination[0]];
            let cell2 = board[combination[1]];
            let cell3 = board[combination[2]];
            
            if(cell1  === '' || cell2  === '' || cell3  === '' ) {
                return;
            }

            if(cell1 === cell2 && cell1 === cell3) {

                setIsWon(true);
                setStatus(player === 'x' ? STATUSES.X_WON : STATUSES.O_WON);
            }
        })
    }

    const play = (e) => {
       
        if(!isWon && !e.target.innerText) {

            setStatus('');
            updateBoard(e);

        } else if (!isWon && e.target.innerText) {
            setStatus(STATUSES.ILLEGAL_MOVE);
            setTimeout(() => setStatus(''), 1500);
        }
          
    }

    const startNewGame = () => {
        setBoard(['','','','','','','','','']);
        setPlayer('o');
        setStatus('');
        setIsWon(false);
    }

    

    return (<div className='game-container'>
    <div className="title">TIC TAC TOE</div>    
    <div className='board'>
        {board.map((cell, cellIndex) => <div key={cellIndex} 
                                             id={cellIndex} 
                                             className='cell' 
                                             onClick={play}>
                                                {cell}
                                        </div>)}
    </div>
    <StatusBar status={status} player={player}/>
    <button className='new-game-btn' onClick={startNewGame}>New Game</button>
    </div>)
}

export default TicTacToe;