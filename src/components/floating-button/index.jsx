import React, { useState } from 'react'
import Earth from '../../assets/webms/earth.webm'
import SidestripContainer from '../../containers/sidesrtip-container';


const FloatingEarthButton = () => {
    const [offcanvasShow, setOffcanvasShow] = useState(false);
    const [headerHeight, setHeaderheaight] = useState(0);

    const onCanvasHandler = () => {
        setOffcanvasShow((prev) => !prev);
        const header = document.querySelector(".header");
        setHeaderheaight(header && header.getBoundingClientRect().height)
        console.log("oncanvashandler")
    };

    return (
        <React.Fragment>
            <div className='floating-earth-button' onClick={onCanvasHandler}>
                <div className="button-image">
                    <video src={Earth} autoPlay loop muted alt="loading ..." />
                </div>
            </div>
            <SidestripContainer show={offcanvasShow} onclose={onCanvasHandler} headerHeight={headerHeight} />
        </React.Fragment>
    )
}

export default FloatingEarthButton