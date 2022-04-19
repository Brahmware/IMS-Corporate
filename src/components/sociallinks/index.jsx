import React from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../../assets/icons';

const SocialLinks = () => {
    return (
        <div className='social-links'>
            <a href="www.facebook.com/"><FacebookIcon /></a>
            <a href="www.twitter.com/"><TwitterIcon /></a>
            <a href="www.youtube.com"><YoutubeIcon /></a>
            <a href="www.instagram.com"><InstagramIcon /></a>
        </div>
    )
}

export default SocialLinks