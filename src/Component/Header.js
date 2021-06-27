const Header = ({firstSearch, handleChange}) => {
    return(
        <header className="wrapper">
            <h1>Movie Site</h1>

            <form onSubmit={firstSearch}>
                <label className="sr-only" htmlFor="search">Search</label>
                <input onChange={handleChange} type="text" name="search" id="search" placeholder="Search Here"/>
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

export default Header;