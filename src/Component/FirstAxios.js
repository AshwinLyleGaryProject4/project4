import { useState, useEffect } from 'react';
import axios from 'axios';

const FirstAxios = ({userSearchInput}) => {
    const [firstResults, setFirstResults] = useState([])

    useEffect( () => {
        axios({
        method: `GET`,
        dataResponse: 'json',
        url: `https://api.themoviedb.org/3/search/movie`,
        params: {
            api_key: '9709355fc5ce17fa911605a13712678d',
            language: 'en-US',
            include_adult: 'false',
            page: 1,
            query: userSearchInput
        },
        }).then( (response) => {
        setFirstResults(response.data.results);
        console.log(firstResults);
        })
    }, [])
}

export default FirstAxios;