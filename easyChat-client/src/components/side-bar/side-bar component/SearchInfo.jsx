import React from 'react';
import { Input } from 'semantic-ui-react'

const SearchInfo = ({ setVisible }) => {
  return (
      <>
         <div className='USIheader'>
                <i onClick={() => setVisible(false)} className='fas fa-arrow-left' />
                <p>Contact Info</p>
            </div>
            <div className="Search">
            <Input icon='search' placeholder='Search...' />
            </div>
            <div className="Result">
                <p>Search results</p>
            </div>
      </>
  )
};

export default SearchInfo
