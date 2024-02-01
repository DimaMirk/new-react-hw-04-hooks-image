import { Component } from "react";
import { CiSearch } from "react-icons/ci";

class Searchbar extends Component{
    state = {
        searchQuery: ''
    }

    onSearchChnage = (ev) => {
        this.setState({ searchQuery: ev.currentTarget.value });
    }

    render() {
        return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={
                    (ev) => {
                    ev.preventDefault()
                    this.props.onSearch(this.state.searchQuery)
                    }}>
                <button type="submit" className="SearchForm-button">
                        <CiSearch style={{ width: "30px",height:"30px" }}/>
                </button>
                <input
                    className="SearchForm-input"
                    type="text"                  
                    placeholder="Search images and photos"
                    onInput={this.onSearchChnage}
                />
            </form>
        </header>
        )
    }
}

export default Searchbar;