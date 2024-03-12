
import { NUMBER_OF_CELLS, CELL_VALUES, SELL_STATUS } from "../constants/MineConstants";

export const generateCells = (mode) => {
    const field = [];

    for(let row = 0; row < NUMBER_OF_CELLS[mode].rows; row++) {
        field.push([]);
        for(let col = 0; col < NUMBER_OF_CELLS[mode].columns; col++) {
            field[row].push({
                value: CELL_VALUES.EMPTY,
                state: SELL_STATUS.OPENED,
            })
        }
    }

    return field;
}