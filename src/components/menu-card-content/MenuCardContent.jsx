import React from 'react'
import FilledButton from '../buttons/FilledButton';

const MenuCardContent = ({card}) => {
  const image=card.image;
  const cardtitle=card.cardtitle;
  const cardcontent=card.cardcontentlist;
  return (
    <React.Fragment>
        <div className="menu-card-content-image">
            <img src={image} alt={""} />
        </div>
        
        <div className='py-4 px-5' style={{height: "60%"}} >
            <div className='d-flex justify-content-between align-items-center'>
                <div className='title'>
                    <span
                        className='fs-5'
                        dangerouslySetInnerHTML={{
                            __html: cardtitle
                        }}
                    />
                </div>
                <FilledButton class={`join-button fw-bold`} text={"JOIN"} />
            </div>
            <ul className="content pt-3">
                {
                    cardcontent.map((cardcontent, key) => {
                        return (
                            <React.Fragment key={key}>
                                <li
                                    className='menu-card-content-list-items-container-5'
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
    </React.Fragment>
  )
}

export default MenuCardContent

