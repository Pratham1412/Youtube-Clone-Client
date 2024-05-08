const videoReducer =(state= {data:null},action)=>{
    switch(action.type){
        case 'POST_VIDEO' :
            return {...state}
        default:
            return state;
    }
}

export default videoReducer