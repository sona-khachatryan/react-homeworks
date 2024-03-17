
import { GAME_MODES, CELL_VALUES, CELL_STATUS } from "../constants/MineConstants";

const getAdjacentCells = (mode, field, row, col) => {

    const topLeftCell = row > 0 && col > 0 ? 
    {
        cell: field[row-1][col-1],
        row: row-1,
        col: col-1
    } : null;
    const topCell = row > 0 ? 
    {
        cell: field[row-1][col],
        row: row-1,
        col: col
    } : null;
    const topRightCell = row > 0 && col < GAME_MODES[mode].columns - 1 ? 
    {
        cell: field[row-1][col+1],
        row: row-1,
        col: col+1
    } : null;
    const leftCell = col > 0 ? 
    {
        cell: field[row][col-1],
        row: row,
        col: col-1
    } : null;
    const rightCell = col < GAME_MODES[mode].columns - 1 ? 
    {
        cell: field[row][col + 1],
        row: row,
        col: col+1
    } : null;
    const bottomLeftCell = row < GAME_MODES[mode].rows - 1 && col > 0 ? 
    {
        cell: field[row+1][col-1],
        row: row+1,
        col: col-1
    } : null;
    const bottomCell = row < GAME_MODES[mode].rows - 1 ? 
    {
        cell: field[row+1][col],
        row: row+1,
        col: col
    } : null;
    const bottomRightCell = row < GAME_MODES[mode].rows - 1 && col < GAME_MODES[mode].columns - 1 ? 
    {
        cell: field[row+1][col+1],
        row: row+1,
        col: col+1
    } 
     : null;

    return [
        topLeftCell,
        topCell,
        topRightCell,
        leftCell,
        rightCell,
        bottomLeftCell,
        bottomCell,
        bottomRightCell,
    ]
}

const generateCells = (mode) => {

    //generateEmptyCells
    const field = [];

    for(let row = 0; row < GAME_MODES[mode].rows; row++) {
        field.push([]);
        for(let col = 0; col < GAME_MODES[mode].columns; col++) {
            field[row].push({
                value: CELL_VALUES.EMPTY,
                status: CELL_STATUS.CLOSED,
            })
        }
    }

    //generateMines
    let placedMines = 0;
    while(placedMines < GAME_MODES[mode].mines) {
        const randomRow = Math.floor(Math.random()*GAME_MODES[mode].rows);
        const randomCol = Math.floor(Math.random()*GAME_MODES[mode].columns);

        const currentCell = field[randomRow][randomCol];
        if(currentCell.value !== CELL_VALUES.MINE) {
            field[randomRow][randomCol] = {...field[randomRow][randomCol], value: CELL_VALUES.MINE};
            placedMines++;
        };
    }

    //calculateNumbers
    for(let row = 0; row < GAME_MODES[mode].rows; row++) {
        for(let col = 0; col < GAME_MODES[mode].columns; col++) {
            
            const currentCell = field[row][col];

            if(currentCell.value === CELL_VALUES.MINE) {
                continue;
            }

            let numberOfMines = 0;
            // const topLeftCell = row > 0 && col > 0 ? field[row-1][col-1] : null;
            // const topCell = row > 0 ? field[row-1][col] : null;
            // const topRightCell = row > 0 && col < GAME_MODES[mode].columns - 1 ? field[row-1][col+1] : null;
            // const leftCell = col > 0 ? field[row][col-1] : null;
            // const rightCell = col < GAME_MODES[mode].columns - 1 ? field[row][col + 1] : null;
            // const bottomLeftCell = row < GAME_MODES[mode].rows - 1 && col > 0 ? field[row+1][col-1] : null;
            // const bottomCell = row < GAME_MODES[mode].rows - 1 ? field[row+1][col] : null;
            // const bottomRightCell = row < GAME_MODES[mode].rows - 1 && col < GAME_MODES[mode].columns - 1 ? field[row+1][col+1] : null;

            // const adjacentCells = [
            //     topLeftCell,
            //     topCell,
            //     topRightCell,
            //     leftCell,
            //     rightCell,
            //     bottomLeftCell,
            //     bottomCell,
            //     bottomRightCell,
            // ]

            const adjacentCells = getAdjacentCells(mode, field, row, col);
            adjacentCells.forEach(adjCell => {
                if(adjCell?.cell.value === CELL_VALUES.MINE) {
                    numberOfMines++;
                }
            })

            if(numberOfMines > 0) {
                field[row][col] = {
                    ...currentCell,
                    value: CELL_VALUES[numberOfMines]
                }
            }
        }
    }

    return field;
}

const openAdjacentCells = (mode, currentCells, rowIndex, cellIndex) => {
    const currentCell =  currentCells[rowIndex][cellIndex];
    currentCell.status = CELL_STATUS.OPENED;

    const adjacentCells = getAdjacentCells(mode, currentCells,  rowIndex, cellIndex);

    adjacentCells.forEach(adjCell => {
        if(adjCell?.cell.status === CELL_STATUS.CLOSED && adjCell.cell.value !== CELL_VALUES.MINE) {
            if(adjCell.cell.value !== CELL_VALUES.EMPTY) {
                adjCell.cell.status = CELL_STATUS.OPENED;
            } else {
                currentCells = openAdjacentCells(mode, currentCells, adjCell.row, adjCell.col);
            }
        }
    })

    return currentCells;
}


export { generateCells, openAdjacentCells}