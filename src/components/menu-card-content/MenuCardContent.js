import React from 'react'
import FilledButton from '../buttons/FilledButton';

export default function MenuCardContent({card}) {
  const image=card.image;
  const cardtitle=card.cardtitle;
  const cardcontent=card.cardcontentlist;
  return (
    <>
        <div className="" style={{"height": "40%"}}>
            <img
                className='menu-card-content-image'
                src={image} alt={""} // alt need to be added
            />
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
    </>
  )
}

