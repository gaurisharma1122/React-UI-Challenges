import React, { useState } from 'react'

const SearchBox = () => {

  const data = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Quince',];
  const [suggestions, setSuggestions] = useState([]);

  const debounce = (callback, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    }
  };

  const search = debounce((value) => {
    const searchSuggestions = data.filter(item => item.toLowerCase().includes(value));
    setSuggestions(searchSuggestions);
  }, 700);

  const handleChange = (e) => {
    search(e.target.value);
  };

  return (
    <div className='search-box'>
      <div>
        <input type='text' placeholder='Search here...' onChange={handleChange} />
        <ul>
          {
            suggestions?.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    </div >
  )
}

export default SearchBox