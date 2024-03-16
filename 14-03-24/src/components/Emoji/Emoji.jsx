import { EMOJIS } from "../../constants/MineConstants";

function Emoji({status, handleReset}) {
    return <span className='emoji' role='img' aria-label='face' onClick={handleReset}>
        {status ? EMOJIS[status] : EMOJIS.PLAYING}
    </span>
}

export default Emoji;