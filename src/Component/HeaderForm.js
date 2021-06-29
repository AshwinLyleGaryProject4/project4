import { useState, useEffect } from 'react';
import axios from 'axios';

const HeaderForm = () => {
    const [userSearchInput, setUserSearchInput] = useState('Titanic') 
    const [firstResults, setFirstResults] = useState([])

    useEffect( () => {
        axios({
        method: `GET`,
        dataResponse: 'json',
        url: `https://api.themoviedb.org/3/search/movie?`,
        params: {
            api_key: '9709355fc5ce17fa911605a13712678d',
            language: 'en-US',
            include_adult: 'false',
            page: 1,
            query: userSearchInput
        },
        }).then( (response) => {
        // setFirstResults(response.data.results);
        console.log(response);
        })
    }, [])

    const handleSearch = (event) => {
        event.preventDefault();
        setUserSearchInput('');
    }

    return(
        <header>
            <h1>Quick Flick Picker</h1>
    
            <form onSubmit={handleSearch} action="search">Search
                <label htmlFor="searchBar"></label>
                <input onChange={(event) => {setUserSearchInput(event.target.value)}} value={userSearchInput} type="text" name="searchBar" id="searchBar" placeholder="Search" />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

export default HeaderForm;