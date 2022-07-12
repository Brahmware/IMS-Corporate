import React from 'react'
import AuthorCard from './authorcard'
import ImageOnly from './imageonly'
import ImageWithText from './imagewithtext'
import TextContent from './textcontent'

const NewsPageBody = ({ data}) => {
    const newscontent=data[0].newscontent
    const author=data[1].author[0];
    const sections={
        "textcontent": (type,elements)=>{
            return (
                <TextContent type={type} elements={elements} />
            )
        },
        "imagewithtext": (type,elements)=>{
            return (
                <ImageWithText type={type} elements={elements} />
            )
        },
        "imageonly": (type,elements)=>{
            return (
                <ImageOnly type={type} elements={elements} />
            )
        }
    }
    return (
        <React.Fragment>
            <div className="newspage-body">
                <div className="newspage-content">
                    {
                        newscontent.map((elements,index)=>{
                            const category=elements.category
                            return (
                                <React.Fragment key={index}>
                                    {
                                        sections[category](elements.type,elements.elements)
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <AuthorCard type={author.type} elements={author.elements} />
            </div> 
        </React.Fragment>
    )
}

export default NewsPageBody


{/* <TextContent type={heading.type} elements={heading.elements} />
                    <div className="divider"
                        data-aos='fade-right'
                        data-aos-duration='600'
                        data-aos-delay='300'
                    />
                    <TextContent type={content.type} elements={content.elements} />
                    <TextContent type={quotes.type} elements={quotes.elements} />
                    <ImageWithText type={imagewithtext.type} elements={imagewithtext.elements} />
                    <ImageWithText type={imagewithtext2.type} elements={imagewithtext2.elements} />
                    <ImageOnly type={image.type} elements={image.elements} /> */}