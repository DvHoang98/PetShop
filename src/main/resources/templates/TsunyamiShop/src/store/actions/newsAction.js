export const getAllNews = (lstNews) => {
    return{
        type:"GET_ALL_News",
        payload:lstNews
    }
};

export const addNewNews = (News) =>{
    return{
        type:"ADD_News",
        payload:News
    }
}

export const updateNews = (News)=>{
    return{
        type : "UPDATE_News",
        payload :News
    }
}