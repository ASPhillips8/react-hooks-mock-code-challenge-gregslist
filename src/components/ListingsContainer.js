import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({ listings }) {
  const displayedListings = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} />
  })

  return (
    <main>
      <ul className="cards">{displayedListings}</ul>
    </main>
  )
}

export default ListingsContainer
