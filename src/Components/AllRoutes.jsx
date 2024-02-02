import React from 'react'
import Home from '../Pages/Home/Home';
import {
    Routes,
    Route,
} from "react-router-dom";
import Library from '../Pages/Library/Library';
import YourVideo from '../Pages/YourVideo/YourVideo';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from '../Pages/WatchLater/WatchLater';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/library'element={<Library/>}/>
        <Route path='/history'element={<WatchHistory/>}/>
        <Route path='/watchlater'element={<WatchLater/>}/>
        <Route path='/likedvideo'element={<LikedVideo/>}/>
        <Route path='/yourvideos'element={<YourVideoVideo/>}/>
    </Routes>
  )
}

export default AllRoutes
