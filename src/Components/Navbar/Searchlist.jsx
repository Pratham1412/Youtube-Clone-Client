import React from 'react'
import './SearchList.css'
import {FaSearch} from 'react-icons/fa';
function Searchlist({TitleArray,setSearchQuery}) {
  return (
    <>
      <div className="Container_SearchList">
        {
            TitleArray.map(m=>{
                return  <p 
                key={m}
                onClick={e=>setSearchQuery(m)}
                className="titleList"> 
                <FaSearch/>
                {m}
            </p>
            })
        }
      </div>
    </>
  )
}

export default Searchlist