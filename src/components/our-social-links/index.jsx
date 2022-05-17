import React from 'react'
import OurSocialMediaData from '../../data/our-social-links.json';
import SocialIconComponent from '../social-icon-component';

const OurSocialLinks = () => {
  return (
    <div className='our-social-links-component'>
        {
            OurSocialMediaData && OurSocialMediaData.map((socialMedia, key) => {
                return (
                    <React.Fragment key={key}>
                        <SocialIconComponent socialid={socialMedia.id} link={socialMedia.link} />
                    </React.Fragment>
                )
            })
        }
    </div>
  )
}

export default OurSocialLinks