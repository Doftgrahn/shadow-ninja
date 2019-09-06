
const url = '/api/games';

const fetchAllGames = (callback) => {
    fetch(url)
        .then(resp => resp.json())
        .then((result) => {
            callback(result)
        })
}

export {
    fetchAllGames
};
