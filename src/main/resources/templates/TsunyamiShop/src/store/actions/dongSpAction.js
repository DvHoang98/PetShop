
export const getAllDongSp = (lstDongSp) => {
    return{
        type:"GET_ALL_DONGSP",
        payload:lstDongSp
    }
};

export const addNewDongSp = (dongSp) =>{
    return{
        type:"ADD_DONGSP",
        payload:dongSp
    }
}

export const updateDongSp = (dongSp)=>{
    return{
        type : "UPDATE_DONGSP",
        payload :dongSp
    }
}


