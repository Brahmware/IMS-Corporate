import React from 'react'

function Spinner() {
    return (
        <div className="text-center">
            <video autoPlay muted loop className="my-3" style={{ width: "20%" }} src="/images/common/spinner.webm" alt="Loading..." />
        </div>
    )
}

export default Spinner;