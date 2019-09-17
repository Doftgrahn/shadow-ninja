import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    return (
        
    <footer className="footer">
        <div className="footer__wrapper">
            <h4>Gmail adrese :<br/>
            </h4>
            <a className="a"href="intressantdokument.html#imail">ninja@jmail.com</a><br/><br/>
 <div className="iconWrapper">
<SocialIcon className="icont"url="http://twitter.com" />
<SocialIcon className="iconf"url="http://facebook.com" />
<SocialIcon className="iconi"url="http://instagram.com" />
</div>           



        </div>
       

    </footer>)
}

export default Footer;



