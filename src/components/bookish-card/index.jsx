import React from 'react'

const BookishCard = (props) => {
    return (
        <div className='bookish-card'>
            <div
                className="title"
                data-aos={!props.inverse ? 'fade-left' : 'fade-right'}
                data-aos-duration='600'
                data-aos-delay='300'
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: props.title
                    }}
                />
            </div>
            <div
                className="subtitle"
                data-aos={!props.inverse ? 'fade-left' : 'fade-right'}
                data-aos-duration='600'
                data-aos-delay='600'
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: props.subtitle
                    }}
                />
            </div>
            <div
                className="divider"
                data-aos={!props.inverse ? 'fade-left' : 'fade-right'}
                data-aos-duration='600'
                data-aos-delay='900'
            />
            <div
                className="content"
                data-aos={!props.inverse ? 'fade-left' : 'fade-right'}
                data-aos-duration='600'
                data-aos-delay='1200'
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: props.content
                    }}
                />
            </div>
            {
                props.extracomponents && props.extracomponents.map((eachComponent, componentkey) => {
                    return (
                        <div
                            className="button-element"
                            data-aos={!props.inverse ? 'fade-left' : 'fade-right'}
                            data-aos-duration='600'
                            data-aos-delay={1500 + componentkey * 300}
                            key={componentkey}
                        >
                            {eachComponent}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BookishCard