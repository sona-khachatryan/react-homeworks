import { CELL_STATUS, CELL_VALUES } from "../../constants/MineConstants";

function Cell({cell, onCellClick, handleRightClick}) {
    const renderContent = () => {
        if(cell.status === CELL_STATUS.OPENED) {
            switch (cell.value) {
                case CELL_VALUES.MINE:
                    return <span role='img' aria-label='bomb'>
                        💣
                    </span>;
                case CELL_VALUES.EMPTY:
                    return '';
                default: return cell.value;                               
            }
        } else if (cell.status === CELL_STATUS.FLAGGED) {
            return <span role='img' aria-label='flag'>
                🚩
            </span>;
        }
    }


    return <div className={`minesweeper-cell 
                          ${cell.status === CELL_STATUS.OPENED ? 'open' : ''}
                          value-${cell.value}
                          `}
                onClick={onCellClick}
                onContextMenu={handleRightClick}>
        {renderContent()}
    </div>
}

export default Cell;