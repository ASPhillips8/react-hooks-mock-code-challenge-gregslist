import React, { useState, useEffect } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const filteredItems = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchInput.toLowerCase())
  )

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((listingData) => setListings(listingData))
  }, [])

  function handleDeleteListing(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  }

  function handleSearchItem(search) {
    setSearchInput(search)
  }

  return (
    <div className="app">
      <Header onSearch={handleSearchItem} />
      <ListingsContainer
        listings={filteredItems}
        onDelete={handleDeleteListing}
      />
    </div>
  )
}

export default App
