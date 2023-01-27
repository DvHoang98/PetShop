export const getAllUser = (lstUser) => {
    return{
        type:"GET_ALL_User",
        payload:lstUser
    }
};

export const addNewUser = (User) =>{
    return{
        type:"ADD_User",
        payload:User
    }
}

export const updateUser = (User)=>{
    return{
        type : "UPDATE_User",
        payload :User
    }
}