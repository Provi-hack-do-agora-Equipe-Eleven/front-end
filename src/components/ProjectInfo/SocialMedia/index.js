import email from '../../../assets/icons/email.svg';
import instagram from '../../../assets/icons/instagram.svg';
import twitter from '../../../assets/icons/twitter.svg';
import "./style.css";

const SocialMedia = () => {
    return (
        <>
            <img src={email} alt="logo email" className='social-media'/>
            <img src={instagram} alt="logo instagram" className='social-media'/>
            <img src={twitter} alt="logo twitter" className='social-media' />
        </>
    );
};

export default SocialMedia;