import React from 'react'
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa';
import { BsMicFill } from 'react-icons/bs'
import SearchList from './Searchlist'
import {useState} from 'react'
import { useSelector } from 'react-redux';
function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
const [seachListA, setseachListA] = useState(false)
const TitleArray = useSelector(s=>s?.videoReducer)
?.data?.filter(q=> q?.videoTitle.toUpperCase().includes(searchQuery?.toUpperCase())).map(m=>m?.videoTitle)
console.log(TitleArray)
//const TitleArray=["video1","Video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()))
  return (
    <>
        <div className="SearchBar_Container">
            <div className="SearchBar_Container2">
                <div className="search_div">
                    <input type="text"  className='iBox_SearchBar' placeholder="Search"
                      onChange={e=>setSearchQuery(e.target.value)}
                      onClick={e=>setseachListA(true)}
                      value={searchQuery}
                    />
                    <FaSearch className="searchIcon_SearchBar"
                    onClick={e=>setseachListA(false)}
                    />
                    <BsMicFill className="Mic_SearchBar"/>
                     {
                       searchQuery&& seachListA&&
                       <SearchList
                       setSearchQuery={setSearchQuery}
                       TitleArray={TitleArray}
                       />
                     } 
                </div>
            </div>
        </div>
    </>
  );
}

export default SearchBar
//searchlist me l chota hai