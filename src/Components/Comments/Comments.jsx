import React from 'react'
import './Comments.css'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { postComment } from '../../actions/comment';
import DisplayComments from './DisplayComments';
const  Comments = ({videoid})=> {
    const dispatch=useDispatch()
    const [commentText,setCommentText] = useState("");
    const currentuser=useSelector(state => state.currentuserreducer)
    const commentsList=useSelector(state=>state.commentreducer)
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

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        if(currentuser){
            if(!currentuser){
                alert("please type your comment!!")
            }
            else{
                dispatch(postComment({
                    videoid:videoid,
                    userid:currentuser?.result._id,
                    commentbody:commentText,
                    usercommented:currentuser.result.name

                }))
                setCommentText("")
            }
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
                commentsList?.data.filter((q) => videoid === q?.videoid)
                .reverse()
                .map((m=>{
                    return(
                        <DisplayComments
                        cId={m._id}
                        commentbody={m.commentbody}
                        userCommented={m.userCommented}
                        />
                    )
                }))
            }
            {/* <DisplayComments/> */}
        </div>
    </>
  )
}

export default Comments