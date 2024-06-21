import React, { useState } from "react"

function Search({ onSearch }) {
  const [searchItem, setSearchItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    onSearch(searchItem)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Search
