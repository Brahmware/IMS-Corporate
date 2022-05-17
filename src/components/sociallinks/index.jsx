import React from 'react';
import SocialIconComponent from '../social-icon-component';

const SocialLinks = () => {
    return (
        <div className='social-links'>
            <SocialIconComponent socialid={'facebook'} link={"https://www.facebook.com"} />
            <SocialIconComponent socialid={'twitter'} link={"https://www.twitter.com"} />
            <SocialIconComponent socialid={'youtube'} link={"https://www.youtube.com"} />
            <SocialIconComponent socialid={'instagram'} link={"https://www.instagram.com"} />
        </div>
    )
}

export default SocialLinks