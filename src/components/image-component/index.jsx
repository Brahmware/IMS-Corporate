import React, { useEffect, useState } from 'react'

let ImageComponent = function ({ src, deziredaspect, alt }) {

    const [imageDimensions, setImageDimensions] = useState({
        width: null,
        height: null
    });

    const [imageStyle, setImageStyle] = useState ({});

    var img = new Image();
    img.src = src;
    img.onload = function () { 
        imageDimensions.width !== this.width 
        && imageDimensions.height !== this.height
        && setImageDimensions({width: this.width, height: this.height}) 
    }

    let srcAspect = imageDimensions.width / imageDimensions.height;

    useEffect(() => {
        if(srcAspect > deziredaspect) {
            setImageStyle ({
                "height": "100.1%",
                "minWidth": "100.1%",
                "objectFit": "cover"
            })
        } else {
            setImageStyle({
                "minHeight": "10.1%",
                "width": "100.1%",
                "objectFit": "cover"
            })
        }
    }, [deziredaspect, srcAspect])

    return (
        <img src={src} style={imageStyle} alt={alt}/>
    )
}

export default ImageComponent