import { useState } from "react";
import { generateCells } from "../../utils/MineUtils";
import Cell from "../Cell/Cell";

function Gamefield({mode}) {
    const [cells, setCells] = useState(generateCells(mode));

    console.log(cells)

    return <div className='minefield'>
        {cells.map((row, rowIndex) => 
            row.map((cell, cellIndex) => <Cell key={`${rowIndex}-${cellIndex}`} 
                                               cell={cell}
                                               
                                               />))}
    </div>
}

export default Gamefield;