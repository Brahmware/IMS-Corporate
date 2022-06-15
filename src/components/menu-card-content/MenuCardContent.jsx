import React from 'react'
import FilledButton from '../buttons/FilledButton';
import {useHistory} from "react-router-dom"
import ParallaxImageComponent from '../parallax-image-component';

const MenuCardContent = ({ card }) => {
    const history=useHistory()
    const image = card.image;
    const cardtitle = card.cardtitle;
    const cardcontent = card.cardcontentlist;

    return (
        <React.Fragment>
            <div className="image-part">
                <ParallaxImageComponent image={image} />
            </div>
            <div className='py-4 my-3 px-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='title menu-card-content-heading'>
                        <span
                            className='fs-5'
                            dangerouslySetInnerHTML={{
                                __html: cardtitle
                            }}
                        />
                    </div>
                    <FilledButton class={`join-button`} text={"JOIN"} 
                        onClick={() => history.push('/join')}
                    />
                </div>
                <div className='ps-3 mt-4'>
                    <ul className="content">
                        {
                            cardcontent.map((cardcontent, key) => {
                                return (
                                    <React.Fragment key={key}>
                                        <li
                                            className='menu-card-content-list'
                                            dangerouslySetInnerHTML={{
                                                __html: cardcontent
                                            }}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MenuCardContent

