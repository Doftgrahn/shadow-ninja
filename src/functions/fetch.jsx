const url = '/api/games';

const fetchAll = (sendBack) => {
    fetch(url).then(resp => resp.json()).then((result) => {
        sendBack(result)
    })
}
