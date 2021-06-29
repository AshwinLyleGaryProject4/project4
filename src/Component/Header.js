const Header = ({firstSearch, handleChange}) => {
    return(
        <header className="wrapper">
            <h1>Movie Site</h1>

            <form onSubmit={firstSearch}>
                <label className="sr-only" htmlFor="search">Search</label>
                <input onSubmit={handleChange} type="text" name="search" id="search" placeholder="Search Here"/>
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

export default Header;

// handleChange on submit. Go through notes to see how to stop page from breaking.
