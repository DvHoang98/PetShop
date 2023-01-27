export const getCurrentUser = () => {
    return{
        type:"GET_CURRENT_USER",
        payload:""
    }
};

export const loginUser = (user) => {
    return{
        type:"LOGIN_USER",
        payload:user
    }
};

export const logoutUser = () => {
    return{
        type:"LOGOUT_USER",
        payload:""
    }
};
