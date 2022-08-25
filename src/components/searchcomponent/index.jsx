import React from 'react'
import { SearchIcon } from '../../assets/icons'
import { useForm } from "react-hook-form";

const SearchComponent = (props) => {

    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur",
    });

    let handleSerachSubmit = async (data) => {
        console.log(data);
    }

    return (
        <div className={!props.toggleState ? "search search-invisible" : "search"}>
            
            <form onSubmit={handleSubmit(handleSerachSubmit)}>
                <input
                    type='text'
                    placeholder='Type Your Search'
                    {...register('search_input')}
                />
                <button className='search-button' type="submit">
                    <SearchIcon />
                </button>
            </form>
        </div>
    )
}

export default SearchComponent