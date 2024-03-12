const STATUSES = {
    X_WON: 'Congrats X! You won the game!',
    O_WON: 'Congrats O! You won the game!',
    ILLEGAL_MOVE: 'ILLEGAL MOVE! Choose an empty cell!',
    DRAW: "It's a draw! Start a new game!",
}

const WINNING_CASES = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

export {STATUSES, WINNING_CASES}