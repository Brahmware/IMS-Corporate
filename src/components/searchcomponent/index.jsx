import React from 'react'
import { SearchIcon } from '../../assets/icons'

const SearchComponent = (props) => {
    // console.log(window.innerWidth)
    return (
        <div className={!props.toggleState ? "search search-invisible" : "search"}>
            <form>
                <input type='text' name='search_input' placeholder='Type Your Search' />
                <button className='search-button'>
                    <SearchIcon />
                </button>
            </form>

        </div>
    )
}

export default SearchComponent