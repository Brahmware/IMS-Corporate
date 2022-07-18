import React from 'react'


const TextContent = (props) => {
    const elements=props.elements[0];
    const fade=props.type==='content'?'fade-left':'fade-right';
    return (
        <>
            <div className={props.type}
                data-aos={fade}
                data-aos-duration='600'
                data-aos-delay='300'
            >
                {
                    props.type==='quotes' &&
                    <div className="quotes-upper"
                        data-aos='fade-left'
                        data-aos-duration='600'
                        data-aos-delay='500'
                    />
                }
                <span
                    dangerouslySetInnerHTML={{
                        __html: elements.text
                    }}
                />
                {
                    props.type==='quotes' &&
                    <div className="quotes-lower"
                        data-aos='fade-right'
                        data-aos-duration='600'
                        data-aos-delay='500'
                    />
                }
                {
                    props.type==='heading' &&
                    <div className={'divider'}
                        data-aos='fade-right'
                        data-aos-duration='600'
                        data-aos-delay='300'
                    />
                }
            </div>
        </>
    )
}

export default TextContent