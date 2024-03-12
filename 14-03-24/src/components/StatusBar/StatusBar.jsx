import { STATUSES } from '../../constants/TTTconstants';
import '../TicTacToe/TicTacToe.css'

function StatusBar({status, player}) {
    return <div className='status-bar'>
       {!status && <div className='status'>{player}'s turn</div>}
       {status && <div className={status === STATUSES.ILLEGAL_MOVE ? 'error' : 'status'}>{status}</div>}
    </div>
}

export default StatusBar;