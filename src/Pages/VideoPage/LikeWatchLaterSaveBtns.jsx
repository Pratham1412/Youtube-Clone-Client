import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import './LikeWatchLaterSaveBtns.css'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri'
import { useState } from 'react'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addTolikedVideo} from "../../actions/likedVideo";
function LikeWatchLaterSaveBtns({vv,vid}) {
    const CurrentUser = useSelector((state) => state?.currentUserReducer);
    const dispatch=useDispatch()
    const [SaveVideo, setSaveVideo] = useState(true);
    const [DislikeBtn, setDislikeBtn] = useState(false);
    const [LikeBtn, setLikeBtn] = useState(false);
    const toggleSavedVideo=()=>{
            if(SaveVideo){
                setSaveVideo(false);
            }
            else{
                setSaveVideo(true);
            }
    }
    const toggleLikeBtn=(e,lk)=>{
        if(CurrentUser){
        if(LikeBtn){
            setLikeBtn(false);
            dispatch(
                likeVideo({
                id: vid,
                Like: lk - 1,
            })
        );
        }
        else{
            setLikeBtn(true);
            dispatch(
                likeVideo({
                id: vid,
                Like: lk + 1,
            })
        );
        dispatch(
            addTolikedVideo({
              videoId: vid,
              Viewer: CurrentUser?.result._id,
            })
          );
            setDislikeBtn(false);
        }
    }else{
        alert("Plz login to give a like")
    }
    }

    const toggleDislikeBtn=(e,lk)=>{
        if(CurrentUser){
        if(DislikeBtn){
            setDislikeBtn(false);
            }
            else{
                setDislikeBtn(true);
                if(LikeBtn){
                    dispatch(
                        likeVideo({
                        id:vid,
                        Like: lk - 1,
                    }));
                }
                setLikeBtn(false);
        }
    }else{
        alert("Plz login to give a like")
    }
    }
  return (
    <div className='btns_cont_videoPage'>
        <div className='btn_VideoPage'>
            <BsThreeDots/>
        </div>

        <div className='btn_VideoPage'>
            <div className="like_videoPage" onClick={(e)=>toggleLikeBtn(e,vv.Like)}>
                {
                    LikeBtn ? (<>
                        <AiFillLike size={22} className='btns_videoPage'/>
                    </>
                    ):(
                    <>
                        <AiOutlineLike size={22} className='btns_videoPage'/>
                    </>
                )}
                <b>{vv.Like}</b>
            </div>

            <div className="like_videoPage" onClick={(e)=>toggleDislikeBtn(e,vv?.Like)}>
                {
                    DislikeBtn ? (<>
                        <AiFillDislike size={22} className='btns_videoPage'/>
                    </>
                    ):(
                    <>
                        <AiOutlineDislike size={22} className='btns_videoPage'/>
                    </>
                )}
                <b>DISLIKE</b>
            </div>

            <div className="like_videoPage" onClick={()=>toggleSavedVideo()}>
                {
                    SaveVideo ? (<>
                    <RiPlayListAddFill size={22} className='btns_videoPage'/>
                    <b>Save</b>
                    </>
                    ):(
                    <>
                        <MdPlaylistAddCheck size={22} className='btns_videoPage'/>
                        <b>Saved</b>
                    </>
                )}

            </div>


            <div className="like_videoPage">
                <>
                    <RiHeartAddFill size={22} className='btns_videoPage'/>
                    <b>Thanks</b>
                </>
            </div>

            <div className="like_videoPage">
                <>
                    <RiShareForwardLine size={22} className='btns_videoPage'/>
                    <b>Share</b>
                </>
            </div>  
        </div>
    </div>
  )
}

export default LikeWatchLaterSaveBtns