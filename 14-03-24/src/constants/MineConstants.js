

const CELL_VALUES = {
    MINE: 'MINE',
    EMPTY: 'EMPTY',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8'
}

const CELL_STATUS = {
    OPENED: 'OPENED',
    CLOSED: 'CLOSED',
    FLAGGED: 'FLAGGED'
}

const GAME_MODES = {
    EASY: {
        mode: 'EASY',
        rows: 9,
        columns: 9,
        mines: 10
    },
}

const EMOJIS = {
    PLAYING: '🙂',
    LOST: '😵',
    WON: '😎' 
}

const GAME_STATUS = {
    PLAYING: 'PLAYING',
    LOST: 'LOST',
    WON: 'WON',
    PAUSED: 'PAUSED'
}

export { CELL_VALUES, CELL_STATUS, GAME_MODES, EMOJIS, GAME_STATUS}