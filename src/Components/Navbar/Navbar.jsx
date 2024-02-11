import React,{useEffect} from 'react'
import './Navbar.css'
import logo from'./logo.ico'
import SearchBar from './SearchBar';
import {RiVideoAddLine} from 'react-icons/ri';
import {BiUserCircle} from 'react-icons/bi';
import { GoogleLogin} from 'react-google-login'
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';
import {gapi} from 'gapi-script'
import { useDispatch } from 'react-redux';
import {login} from "../../actions/auth";

function Navbar({toggleDrawer}) {
    const CurrentUser = null;

    useEffect(()=>{
    function start(){
        gapi.client.init({
            clientId: "67743814772-8dhqrgi0fdqap536e0i8t2qjj429clot.apps.googleusercontent.com",
            scope: "email",
        })
    }
    gapi.load("client:auth2",start);
},[])

    const dispatch = useDispatch();

const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    console.log(Email);
    dispatch(login({email:Email}))
}

const onFailure = (response) => {
    console.log("FAILED",response);
}
 

  return (
    <div className="Container_Navbar">
        <div className="Burger_Logo_Navbar">
            <div className="burger" onClick={()=>toggleDrawer()}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <Link to={'/'} className="logo_div_Navbar">
                <img src={ logo } alt="" />
                <p className='logo_title_navbar'>YouTube</p>
            </Link>

        </div>
            <SearchBar/>
            <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
            <div className="apps_Box">
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
            </div>
            <IoMdNotificationsOutline className={"vid_bell_Navbar"}/>
            <div className="Auth_cont_Navbar">
                { CurrentUser ? (
                    <>
                    <div className="Chanel_logo_App">
                        <p className="fstChar_logo_App">
                          {
                            CurrentUser?.result.name ?(
                                <>
                                {
                                    CurrentUser?.result.name.charAt(0).toUppercase()
                                }
                                </>
                            ):(<>
                                {CurrentUser?.result.email.charAt(0).toUpperCase()}
                            </>)
                          }
                        </p>
                    </div>
                    </>
                    ):(
                    <>
                    <GoogleLogin
                    clientId="67743814772-8dhqrgi0fdqap536e0i8t2qjj429clot.apps.googleusercontent.com"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    render={(renderProps)=>(
                    <p onClick={renderProps.onClick} className="Auth_Btn">
                    <BiUserCircle size={22}/>
                    <b>Sign in</b>
                </p>
                )
                }
                    />
                       
                    </>
                )}
            </div>
    </div>
  );
}

export default Navbar




// clientId="67743814772-8dhqrgi0fdqap536e0i8t2qjj429clot.apps.googleusercontent.com"



