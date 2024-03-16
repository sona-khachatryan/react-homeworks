import Emoji from "../Emoji/Emoji";
import NumberDisplay from "../NumberDisplays/NumberDisplays";

function Header({status, mineCount, time, handleReset}) {
    return <div className='header'>
        <NumberDisplay value={mineCount}/>
        <Emoji status={status} handleReset={handleReset}/>
        <NumberDisplay value={time}/>
    </div>
}

export default Header;