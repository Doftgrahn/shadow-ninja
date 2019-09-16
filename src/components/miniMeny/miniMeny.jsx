import React from 'react';

import CartInfo from './cart/cartInfo';
import Chat from '../chat/chat';

const MiniMeny = () => {
    //const [toggleChat, setToggleChat] = useState(false);

    return (<main className="mini">
        <CartInfo/>
        <Chat/>
    </main>)
}

export default MiniMeny;
