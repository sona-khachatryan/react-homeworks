
import { GAME_MODES, CELL_VALUES, CELL_STATUS } from "../constants/MineConstants";

const generateCells = (mode) => {

    //generateEmptyCells
    const field = [];

    for(let row = 0; row < GAME_MODES[mode].rows; row++) {
        field.push([]);
        for(let col = 0; col < GAME_MODES[mode].columns; col++) {
            field[row].push({
                value: CELL_VALUES.EMPTY,
                status: CELL_STATUS.OPENED,
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
    

    return field;
}


export { generateCells, }