import { GAME_MODES } from "../../constants/MineConstants";

function Settings({handleModeChange}) {
    return <div>
            <select className='select' name='mode' defaultValue='EASY' onChange={handleModeChange}>
                {Object.keys(GAME_MODES).map(mode => <option key ={mode} value={mode}>{mode}</option>)}
            </select>
    </div>
}

export default Settings;