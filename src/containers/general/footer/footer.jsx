import React from 'react';
import {SocialIcon} from 'react-social-icons';

const Footer = () => {
    return (<footer className="footer">
        <div className="footer__wrapper">
            
            <h4>Gmail adrese :<br/>
            </h4>
            <a className="a" href="intressantdokument.html#imail">ninja@jmail.com</a><br/><br/>
            <div className="iconWrapper">
                <SocialIcon className="icon" url="http://twitter.com" bgColor="#f7931e" fgColor="white"/>
                <SocialIcon className="icon" url="http://facebook.com" bgColor="#f7931e" fgColor="white"/>
                <SocialIcon className="icon" url="http://instagram.com" bgColor="#f7931e" fgColor="white"/>
            </div>

        </div>

    </footer>)
}

export default Footer;
