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
    const [mineCount, setMineCount] = useState(GAME_MODES[mode].mines);

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

    useEffect(() => {
        setGameStatus('');
        setTime(0);
        setCells(generateCells(mode))
        setMineCount(GAME_MODES[mode].mines)
    }, [mode])

    const handleModeChange = (e) => {
        setMode(e.target.value);
    }

    const onCellClick = (rowIndex, cellIndex) => {
        let currentCells = [...cells];

        if(!gameStatus) {
            let isMine = currentCells[rowIndex][cellIndex].value === CELL_VALUES.MINE;
            while(isMine) {
                currentCells = generateCells(mode);
                if(currentCells[rowIndex][cellIndex].value !== CELL_VALUES.MINE) {
                    isMine = false;
                    break;
                }
            }
            setGameStatus(GAME_STATUS.PLAYING);
        } else if (gameStatus !== GAME_STATUS.PLAYING) {
            return;
        }

        const currentCell = currentCells[rowIndex][cellIndex];

       
        if(currentCell.status === CELL_STATUS.FLAGGED || currentCell.status === CELL_STATUS.OPENED) {
            return;
        }

        if(currentCell.value === CELL_VALUES.MINE) {
            currentCells[rowIndex][cellIndex].exploded = true;
            currentCells = currentCells.map(row => row.map(cell => {
                    if(cell.value === CELL_VALUES.MINE) {
                        cell.status = CELL_STATUS.OPENED;
                    }
                    return cell;
                }
            )) 
            setCells(currentCells);
            setGameStatus(GAME_STATUS.LOST);
            return;
        } else if(currentCell.value === CELL_VALUES.EMPTY) {
            setCells(openAdjacentCells(mode, currentCells, rowIndex, cellIndex));
        } else {
            currentCells[rowIndex][cellIndex].status = CELL_STATUS.OPENED;
            setCells(currentCells);
        }

        //check winning
        let undetectedNumberCell = false;
        for(let row = 0; row < GAME_MODES[mode].rows; row++) {
            for(let col = 0; col < GAME_MODES[mode].columns; col++) {
                if(currentCells[row][col].value !== CELL_VALUES.MINE && currentCells[row][col].value !== CELL_VALUES.EMPTY && currentCells[row][col].status !== CELL_STATUS.OPENED) {
                    undetectedNumberCell = true;
                    break;
                }
            }
        }

        if(!undetectedNumberCell) {
            currentCells = currentCells.map(row => row.map(cell => {
                if(cell.value === CELL_VALUES.MINE) {
                    cell.status = CELL_STATUS.FLAGGED;
                }
                return cell;
            }
            )) 
            setCells(currentCells);
            setMineCount(0);
            setGameStatus(GAME_STATUS.WON);
        }
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
            setMineCount(m => m - 1);
        } else if (currentCell.status === CELL_STATUS.FLAGGED) {
            currentCells[rowIndex][cellIndex].status = CELL_STATUS.CLOSED;
            setCells(currentCells);
            setMineCount(m => m + 1);
        }
    }

    const handleReset = () => {
        setGameStatus('');
        setTime(0);
        setCells(generateCells(mode));
        setMineCount(GAME_MODES[mode].mines);
    };

    return <div>
        <div className='mines-game-container'>
        <Settings handleModeChange={handleModeChange}/>
        <Header status={gameStatus} mineCount={mineCount} time={time} handleReset={handleReset}/>
        <Gamefield mode={mode} cells={cells} onCellClick={onCellClick} handleRightClick={handleRightClick}/>
        </div>
    </div>
}

export default MineSweeper;