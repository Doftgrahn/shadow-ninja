import React from 'react';

const ForOFour = ({history}) => {
    return (
    <main className="for">
        <h1>404</h1>
        <button onClick={history.goBack}>Go Back to where you were!</button>
    </main>)
}

export default ForOFour;
