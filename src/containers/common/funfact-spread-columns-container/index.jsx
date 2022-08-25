import React from 'react'
import FunfactSingleColumnComponent from '../../../components/funfact-single-column-component'

const FunfactColumnSpreadContainer = ({ columnsdata }) => {
    console.log(columnsdata)
    return (
        <div className="funfact-spread-columns-container">
            {
                columnsdata.map((eachColumnData, key) => {
                    return (
                        <React.Fragment key={key}>
                            <FunfactSingleColumnComponent 
                                columnKey = {key}
                                count = {eachColumnData.count}
                                cardtitle = {eachColumnData.cardtitle}
                                cardcontent={eachColumnData.cardcontent}
                                path ={eachColumnData.path}
                            />
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default FunfactColumnSpreadContainer