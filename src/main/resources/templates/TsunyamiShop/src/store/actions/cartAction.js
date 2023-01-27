export const getAllCart = (lstCart) => {
    return{
        type:"GET_ALL_Cart",
        payload:lstCart
    }
};

export const addNewCart = (lst) =>{
    return{
        type:"ADD_TO_Cart",
        payload:lst
    }
}

export const updateCart = (lst)=>{
    return{
        type : "UPDATE_Cart",
        payload :lst
    }
}