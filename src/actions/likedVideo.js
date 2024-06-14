import * as api from "../api";

export const addTolikedVideo=(likedVideoData)=>async(dispatch)=>{
    try {
        const {data}= await api.addToLikedVideo(likedVideoData);
        dispatch({type: "POST_LIKEDVIDEO",data});
    }catch (error){
        console.log(error);
    }
}