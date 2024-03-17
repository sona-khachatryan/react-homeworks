import { useState, useEffect } from "react";
import Gamefield from "../Gamefield/Gamefield";
import Header from "../Header/Header";
import Settings from "../Settings/Settings";
import { CELL_STATUS, CELL_VALUES, GAME_MODES, GAME_STATUS } from "../../constants/MineConstants";
import { generateCells, openAdjacentCells } from "../../utils/MineUtils";
import './Minesweeper.css'

function MineSweeper() {

    const [mode, setMode] = useState(GAME_MODES.EASY.mode);
    const [gameStatus, setGameStatus] = useState('');
    const [cells, setCells] = useState(generateCells(mode));
    const [time, setTime] = useState(0);
    const [mineCount, setMineCount] = useState(GAME_MODES[mode].mines)

    useEffect(() => {
        if(gameStatus === GAME_STATUS.PLAYING && time < 999) {
            const timer = setInterval(() => {
                setTime(t => t+1);
            }, 1000); 

            return () => {
                clearInterval(timer);
            }
        }

    }, [gameStatus])

    const onCellClick = (rowIndex, cellIndex) => {

        if(!gameStatus) {
            setGameStatus(GAME_STATUS.PLAYING);
        }

        const currentCells = [...cells];
        const currentCell = cells[rowIndex][cellIndex];

       
        if(currentCell.status === CELL_STATUS.FLAGGED || currentCell.status === CELL_STATUS.OPENED) {
            return;
        }

        if(currentCell.value === CELL_VALUES.MINE) {
            //todo
        } else if(currentCell.value === CELL_VALUES.EMPTY) {
            openAdjacentCells(mode, currentCells, rowIndex, cellIndex)
        } else {
            currentCells[rowIndex][cellIndex].status = CELL_STATUS.OPENED;
            setCells(currentCells);
        }

        console.log(rowIndex, cellIndex)
       
    }

    const handleRightClick = (e, rowIndex, cellIndex) => {
        e.preventDefault();
        
        if(gameStatus !== GAME_STATUS.PLAYING) {
            return;
        }

        const currentCells = [...cells];
        const currentCell = cells[rowIndex][cellIndex];

        if(currentCell.status === CELL_STATUS.CLOSED) {
            currentCells[rowIndex][cellIndex].status = CELL_STATUS.FLAGGED;
            setCells(currentCells);
            setMineCount(mineCount - 1);
        } else if (currentCell.status === CELL_STATUS.FLAGGED) {
            currentCells[rowIndex][cellIndex].status = CELL_STATUS.CLOSED;
            setCells(currentCells);
            setMineCount(mineCount + 1);
        }
    }

    const handleReset = () => {
        if(gameStatus === GAME_STATUS.PLAYING) {
            setGameStatus('');
            setTime(0);
            setCells(generateCells(mode))
        }
    };

    return <div>
        <Settings/>
        <div className='mines-game-container'>
        <Header status={gameStatus} mineCount={mineCount} time={time} handleReset={handleReset}/>
        <Gamefield cells={cells} onCellClick={onCellClick} handleRightClick={handleRightClick}/>
        </div>
    </div>
}

export default MineSweeper;