import React, {useState} from 'react'
import FilledButton from '../buttons/FilledButton';


const GalleryFilter = ({ data }) => {
    const defaultData={
        "type": "",
        "free": "false",
        "sortBy": "recommended",
        "minPrice": 0,
        "maxPrice": 5000,
        "licences": ""
    }
    const [filterData, setfilterData] = useState(defaultData);

    const sortHandler=(e)=>{
        setfilterData({...filterData, "sortBy": e.target.value});
    }
    // console.log(filterData);
    return (
        <div className="filter-container"
            data-aos='fade-right'
            data-aos-duration='600'
            data-aos-delay='400'
        >
            <div className="filter-title">
                <span
                    dangerouslySetInnerHTML={{
                        __html: data.title
                    }}
                />
            </div>
            <select 
                value={filterData.type} 
                onChange={(e) => setfilterData({...filterData, "type": e.target.value})} 
                className="filter-type filter-text">
                <option value={null} hidden>{"Type"}</option>
                {
                    data.types.map((option, index) => <option key={index} value={option}>{option}</option>)
                }
            </select>

            <div className="filter-free-resource d-flex align-items-center">
                <input 
                    value={filterData.free} 
                    onChange={ (e) => setfilterData({...filterData, "free": (filterData.free==="false")?"true": "false"})}
                    type="checkbox" 
                    className='filter-checkbox bg-primary' 
                    id="free-filter"
                    checked={(filterData.free==="false"?false:true)}
                    // defaultChecked={(filterData.free==="false")?false:true}
                />
                <label htmlFor='free-filter' className="filter-text">Only free Resources</label>
            </div>

            <div className="filter-sort">
                <div className="filter-text filter-header">SORT BY</div>
                <div className="filter-sort-options filter-text">
                    <div className='d-flex align-items-center'>
                        <input value="recommended" onChange={sortHandler} type="radio" className='filter-checkbox' name="sortType" id="recommended" checked={(filterData.sortBy==="recommended")} />
                        <label htmlFor="recommended">Recommended</label>
                    </div>
                    <div className='d-flex align-items-center'>
                        <input value="top-rated" onChange={sortHandler} type="radio" className='filter-checkbox' name="sortType" id="top-rated" />
                        <label htmlFor="top-rated">Top Rated</label>
                    </div>
                    <div className='d-flex align-items-center'>
                        <input value="budget" onChange={sortHandler} type="radio" className='filter-checkbox' name="sortType" id="budget" />
                        <label htmlFor="budget">Budget</label>
                    </div>
                </div>
            </div>
            <div className="filter-sort filter-budget">
                <div className="filter-text filter-header">FILTER</div>
                <div className="filter-text filter-budget-title ">Budget</div>
                <div className="filter-range-slider">
                    <div className="slider-track"></div>
                    <input 
                        value={filterData.minPrice} 
                        onChange={(e)=> setfilterData({...filterData, "minPrice": (e.target.value>=filterData.maxPrice)?filterData.minPrice:e.target.value  })}
                        min="0" 
                        max="5000" 
                        type="range" 
                        id="slider-1"/>
                    <input 
                        value={filterData.maxPrice} 
                        onChange={(e)=> setfilterData({...filterData, "maxPrice": e.target.value})}
                        min="0" 
                        max="5000"
                        type="range" 
                        id="slider-2"/>
                </div>
                <div className="filter-range-data d-flex justify-content-between">
                    <input 
                        type="text" 
                        value={`₹ ${filterData.minPrice}`} 
                        onChange={(e)=>{ setfilterData({...filterData, "minPrice": (!isNaN(e.target.value.slice(2)))?((e.target.value.slice(2)>5000)?"5000":e.target.value.slice(2)):filterData.minPrice  })}} />
                    <div>to</div>
                    <input type="text" value={`₹ ${filterData.maxPrice}`} onChange={(e)=>{ setfilterData({...filterData, "maxPrice": (!isNaN(e.target.value.slice(2)))?((e.target.value.slice(2)>5000)?"5000":e.target.value.slice(2)):filterData.maxPrice  })}} />
                </div>
                <select 
                    value={filterData.licences} 
                    onChange={(e) => setfilterData({...filterData, "licences": e.target.value})} 
                    className="filter-type filter-text">
                    <option value={null} hidden>{"Licences"}</option>
                    {
                        data.licences.map((option, index) => <option key={index} value={option}>{option}</option>)
                    }
                </select>
                <div 
                    className="button-part filter-button"
                    // data-aos='fade-right'
                    // data-aos-duration='600'
                    // data-aos-delay='400'
                >
                    <FilledButton 
                        text={"Reset Filters"} 
                        class={"black-button"}
                        onClick={()=>{
                            setfilterData(defaultData)
                        }} 
                        
                    />
                </div>
            </div>
            
        </div>
    )
}

export default GalleryFilter