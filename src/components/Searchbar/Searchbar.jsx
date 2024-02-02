import { useState } from "react";
import { CiSearch } from "react-icons/ci";


export default function Searchbar({onSearch}) {
    const [searchQuery, setSearchQuery] = useState('')

     return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={
                    (ev) => {
                    ev.preventDefault()
                    onSearch(searchQuery)
                    }}>
                <button type="submit" className="SearchForm-button">
                        <CiSearch style={{ width: "30px",height:"30px" }}/>
                </button>
                <input
                    className="SearchForm-input"
                    type="text"                  
                    placeholder="Search images and photos"
                    onInput={(ev)=>{setSearchQuery(ev.currentTarget.value)}}
                />
            </form>
        </header>
        )
};