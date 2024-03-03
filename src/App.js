// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/LeftSidebar/DrawerSidebar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import CreateEditChanel from './Pages/Chanel/CreateEditChanel';
import { useDispatch } from 'react-redux';
import { fetchAllChanels } from './actions/chanelUser';
function App() {

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchAllChanels());
  }, [dispatch])
  


  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display:"none"
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      setToggleDrawerSidebar({
        display:"flex"
      })
    }else{
      setToggleDrawerSidebar({
        display:"none"
      })
    }
  }
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false)
  return (
    <Router>
      {
        EditCreateChanelBtn && <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn} />}
      <Navbar
      setEditCreateChanelBtn={setEditCreateChanelBtn}
        toggleDrawer={toggleDrawer}
      />
        <DrawerSidebar
          toggleDrawer={toggleDrawer}
          toggleDrawerSidebar={toggleDrawerSidebar}
        />
      
      <AllRoutes setEditCreateChanelBtn={setEditCreateChanelBtn}/>
    </Router>
  );
}

export default App;