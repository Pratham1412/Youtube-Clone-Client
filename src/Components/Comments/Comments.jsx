import React from 'react'
import './Comments.css'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postComment } from '../../actions/comment';
import DisplayComments from './DisplayComments';
function  Comments ({videoId}) {
    const dispatch=useDispatch()
    const [commentText,setCommentText] = useState("");
    const CurrentUser=useSelector((state) => state?.currentUserReducer)
    const commentsList=useSelector((s)=>s.commentReducer)
    // const commentsList=[
    //     {
    //         _id:"1",
    //         commentBody:"hello",
    //         userCommented:"abc",
    //     },
    //     {
    //         _id:"2",

    //         commentBody:"hii",
    //         userCommented:"xyz"
    //     }
    // ]

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (CurrentUser) {
          if (!commentText) {
            alert("Plz Type your comment ! ");
          } else {
            dispatch(
              postComment({
                videoId: videoId,
                userId: CurrentUser?.result._id,
                commentBody: commentText,
                userCommented: CurrentUser?.result.name,
              })
            );
            setCommentText("");
          }
        }else{
          alert("Plz login to post your commnet !")
        }
      };
  return (
    <>
        <form className='comments_sub_form_comments'
        onSubmit={handleOnSubmit}
        >
            <input type="text"
            onChange={e=>setCommentText(e.target.value)}
            placeholder='add comment...'
            className='comment_ibox'
            />
            <input type="submit" value="add" className='comment_add_btn_comments' />
        </form>
        <div className='display_comment_container'>
            {
                commentsList?.data?.filter((q) => videoId === q?.videoId)
                .reverse()
                .map((m=>{
                    return(
                        <DisplayComments
                        cId={m._id}
                        userId={m.userId}
                        commentBody={m.commentBody}
                        commentOn={m.commentOn}
                        userCommented={m.userCommented}
                        />
                    );
                }))
            }
            {/* <DisplayComments/> */}
        </div>
    </>
  )
}

export default Comments