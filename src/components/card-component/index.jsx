import React from 'react'
import { Link } from 'react-router-dom';
import RemoteIconComponent from '../remoeiconcomponent'
import SocialIconComponent from '../social-icon-component';

const IdentityCardComponent = ({ data, cardKey }) => {
    return (
        <div 
            className='identity-card-component'
            data-aos='fade-left'
            data-aos-duration='600'
            data-aos-delay={900 + cardKey * 300}
        >
            <div className="profile-picture">
                <img src={data.profilepicture} alt={data.name} />
            </div>
            <div className="name">
                <span
                    dangerouslySetInnerHTML={{
                        __html: data.name
                    }}
                />
            </div>
            <div className="designation">
                <span
                    dangerouslySetInnerHTML={{
                        __html: data.designation
                    }}
                />
            </div>
            <div className="socials">
                {
                    data.socials && data.socials.map((social, key) => {
                        return (
                            <React.Fragment key={key}>
                                <SocialIconComponent socialid={social.id} link={social.link} />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default IdentityCardComponent