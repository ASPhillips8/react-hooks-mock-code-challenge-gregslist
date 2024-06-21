import React, { useState, useEffect } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((listingData) => setListings(listingData))
  }, [])

  function handleDeleteListing(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} onDelete={handleDeleteListing} />
    </div>
  )
}

export default App
