import { useEffect, useState } from "react";
import { STATUSES, WINNING_CASES } from "../../constants/TTTconstants";
import StatusBar from "../StatusBar/StatusBar";
import './TicTacToe.css';

function TicTacToe() {

    const [player, setPlayer] = useState('o');
    const [statusMessage, setStatusMessage] = useState('');
    const [status, setStatus] = useState('playing');
    const [board, setBoard] = useState(['','','','','','','','','']);

    useEffect(() => {
        checkWinning();

        if(status === 'playing') {
            setPlayer( player === 'x' ? 'o' : 'x');
        }

        if(status === 'playing' && !board.includes('')) {
            setStatusMessage(STATUSES.DRAW);
            setStatus('draw');
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

                setStatus('win');
                setStatusMessage(player === 'x' ? STATUSES.X_WON : STATUSES.O_WON);
            }
        })
    }

    const play = (e) => {
       
        if(status === 'playing' && !e.target.innerText) {
            setStatusMessage('');
            updateBoard(e);
        } else if ( status === 'playing' && e.target.innerText) {
            setStatusMessage(STATUSES.ILLEGAL_MOVE);
            setTimeout(() => setStatusMessage(''), 1500);
        }
          
    }

    const startNewGame = () => {
        setBoard(['','','','','','','','','']);
        setPlayer('o');
        setStatusMessage('');
        setStatus('playing');
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
    <StatusBar status={statusMessage} player={player}/>
    <button className='new-game-btn' onClick={startNewGame}>New Game</button>
    </div>)
}

export default TicTacToe;