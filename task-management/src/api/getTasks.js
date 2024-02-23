

const randomizer = Math.round(Math.random());

export async function getTasks(tasks) {
    if(randomizer) {
        return ({
            res: tasks,
            status: 'success',
        })
    };
    return ({
        res: null,
        status: 'error',
        message: 'Server is not responding'
    });
}

