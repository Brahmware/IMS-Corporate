import React, { useEffect, useState } from 'react'

let ImageComponent = function ({ src, deziredaspect, alt }) {

    const [imageDimensions, setImageDimensions] = useState({
        width: null,
        height: null
    });

    const [imageStyle, setImageStyle] = useState ({});

    var img = new Image();
    img.src = src;
    img.onload = function () { setImageDimensions({width: this.width, height: this.height}) }

    let srcAspect = imageDimensions.width / imageDimensions.height;

    useEffect(() => {
        if(srcAspect > deziredaspect) {
            setImageStyle ({
                "height": "100%",
                "minWidth": "100%",
                "objectFit": "cover"
            })
        } else {
            setImageStyle({
                "minHeight": "100%",
                "width": "100%",
                "objectFit": "cover"
            })
        }
    }, [deziredaspect, srcAspect])

    return (
        <img src={src} style={imageStyle} alt={alt} />
    )
}

export default ImageComponent