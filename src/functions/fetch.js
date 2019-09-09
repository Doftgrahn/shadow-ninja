const url = "/api/games";

/*--
General Fetch, uses the CALLBACK function to send upwards. in useEffect OR componentDidMount, callback(data =>  setData(data))
--*/

const fetchAllGames = callback => {
  fetch(url)
    .then(resp => resp.json())
    .then(result => {
      callback(result);
    });
};

export {fetchAllGames};
