import Gamefield from "../Gamefield/Gamefield";
import Header from "../Header/Header";
import Settings from "../Settings/Settings";
import { GAME_MODES } from "../../constants/MineConstants";
import './Minesweeper.css'

function MineSweeper() {
    return <div>
        <Settings/>
        <div className='mines-game-container'>
        <Header/>
        <Gamefield mode={GAME_MODES.EASY.mode}/>
        </div>
    </div>
}

export default MineSweeper;