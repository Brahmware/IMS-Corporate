import React from 'react'
import { NavLink } from 'react-router-dom'
import RemoteIconComponent from '../remoeiconcomponent'

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
                            <NavLink
                                key={key}
                                to={social.link}
                            >
                                <i className="social-icon" id={social.id}>
                                    <RemoteIconComponent icon={social.icon}/>
                                </i>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default IdentityCardComponent