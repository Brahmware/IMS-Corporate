import React from 'react'
import { IMSLogo } from '../../assets/ourlogo'

const LoadingPage = () => {
    return (
        <div className='page-wrapper loading-page-wrapper'>
            <div className="brand">
                <IMSLogo />
            </div>
            <div className="loading-bar" />
        </div>
    )
}

export default LoadingPage