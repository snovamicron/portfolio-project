import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'

const Search = ({ setText }) => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Input className='searchBar'
        onChange={(e) => setText(e.target.value)}
        loading={loading} placeholder='Search...'
      />
    </>
  )
}

export default Search
