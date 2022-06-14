import React from 'react'

const ReflectionComponent = ({component, outlined}) => {
    const grid = Array.from({ length: 100 }, (_, i) => i + 1);

    return (
        <div className='reflection-container'>
            {
                grid.map((element, key) => {
                    return (
                        <div className={`reflection-grid-cell reflection-grid-cell-${element}`} key={key} />
                    )
                })
            }
            <div className={`reflection-content ${outlined && "outlined"}`}>
                {component}
            </div>
        </div>
    )
}

export default ReflectionComponent