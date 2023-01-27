export const getAllBill = (lstBill) => {
    return{
        type:"GET_ALL_Bill",
        payload:lstBill
    }
};

export const addNewBill = (Bill) =>{
    return{
        type:"ADD_Bill",
        payload:Bill
    }
}

export const updateBill = (Bill)=>{
    return{
        type : "UPDATE_Bill",
        payload :Bill
    }
}