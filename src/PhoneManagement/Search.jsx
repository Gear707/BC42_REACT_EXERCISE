import React, { useState } from 'react';

function Search({ onSearch }) {
    const [searchString, setSearchString] = useState("");

    const handleChange = (event) => {
        setSearchString(event.target.value);
    };

    return (
        <div className="form-group d-flex">
            <input onChange={handleChange} className="form-control w-25" placeholder="Search by name" />
            <button className="btn btn-success ms-2" onClick={() => onSearch(searchString)}>Search</button>
        </div>
    )
}

export default Search;