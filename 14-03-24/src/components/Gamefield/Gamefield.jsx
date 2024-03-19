import Cell from "../Cell/Cell";

function Gamefield({mode, cells, onCellClick, handleRightClick}) {
   
    return <div className={`minefield ${mode}`}>
        {cells.map((row, rowIndex) => 
            row.map((cell, cellIndex) => <Cell key={`${rowIndex}-${cellIndex}`} 
                                               cell={cell}
                                               onCellClick={() => onCellClick(rowIndex, cellIndex)}
                                               handleRightClick={(e) => handleRightClick(e, rowIndex, cellIndex)}
                                               />))}
    </div>
}

export default Gamefield;