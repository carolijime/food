import React, { useState, useEffect } from 'react';

import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {

       try {
           const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
           });
           setResults(response.data.businesses);
           //console.log(results);
       } catch (err) {
           setErrorMessage('Something went wrong');
       }
    };

    //DON'T DO THIS! it will run multiple times!!!
    //searchApi('pasta');

    useEffect(() => {
        searchApi('beef');
    }, []);

    return [searchApi, results, errorMessage];
};
