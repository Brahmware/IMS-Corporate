import React from 'react'
import SocialIconData from "../../data/socialmedia-list.json";
import RemoteIconComponent from '../remoeiconcomponent';

const SocialIconComponent = ({ socialid, link }) => {

    const relatedicon = SocialIconData.find(datum => datum.id === socialid) && SocialIconData.find(datum => datum.id === socialid).icon;
    const genericicon = SocialIconData.find(datum => datum.id === 'generic') && SocialIconData.find(datum => datum.id === 'generic').icon;

    return (
        <a
            href={link}
            target="_blank"
            rel='noreferrer'
            className='socialicon-component'
        >
            <i className="social-icon" id={socialid}>
                <RemoteIconComponent icon={relatedicon ? relatedicon : genericicon} />
            </i>
        </a>
    )
}

export default SocialIconComponent