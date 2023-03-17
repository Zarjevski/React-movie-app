import React from 'react'

const SearchBar = () => {
    const [search, setSearch] = React.useState("")
  return (
    <div className='search'>
        <input value={search}
        onChange={(e)=> setSearch(e.target.value)}
        className="search-bar"
        />
    </div>
  )
}

export default SearchBar