import React from 'react'
import { SearchIcon } from '../../assets/icons'
import './searchcomponent.scss'

const SearchComponent = () => {
    return (
        <div className="search">
            <form>
                <input type='text' name='search_input' placeholder='Type Your Search' />
                <button className='search-button'>
                    <SearchIcon/>
                </button>
            </form>

        </div>
    )
}

export default SearchComponent