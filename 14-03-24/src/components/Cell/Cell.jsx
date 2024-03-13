import { CELL_STATUS, CELL_VALUES } from "../../constants/MineConstants";

function Cell({cell}) {

    const renderContent = () => {
        if(cell.status === CELL_STATUS.OPENED) {
            switch (cell.value) {
                case CELL_VALUES.MINE:
                    return <span role='img' aria-label='bomb'>
                        💣
                    </span>;
                case CELL_VALUES.EMPTY:
                    return '';
                case CELL_VALUES[1]:
                    return CELL_VALUES[1];
                case CELL_VALUES[2]:
                    return CELL_VALUES[2];
                case CELL_VALUES[3]:
                    return CELL_VALUES[3];
                case CELL_VALUES[4]:
                    return CELL_VALUES[4];
                case CELL_VALUES[5]:
                    return CELL_VALUES[5];
                case CELL_VALUES[6]:
                    return CELL_VALUES[6];
                case CELL_VALUES[7]:
                    return CELL_VALUES[7];
                case CELL_VALUES[8]:
                    return CELL_VALUES[8];                              
            }
        } else if (cell.status === CELL_STATUS.FLAGGED) {
            return <span role='img' aria-label='flag'>
                🚩
            </span>;
        }
    }

    return <div className={`minesweeper-cell ${cell.status === CELL_STATUS.OPENED ? 'open' : ''}`}>
        {renderContent()}
    </div>
}

export default Cell;