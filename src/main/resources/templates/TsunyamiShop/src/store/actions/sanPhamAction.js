
export const getAllSanPham = (lstSP) => {
    return{
        type:"GET_ALL_SAN_PHAM",
        payload:lstSP
    }
};

export const addNewSanPham = (sanPham) =>{
    return{
        type:"ADD_SAN_PHAM",
        payload:sanPham
    }
}

export const updateSanPham = (sanPham)=>{
    return{
        type : "UPDATE_SAN_PHAM",
        payload :sanPham
    }
}