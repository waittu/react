export const getList = (list)=>{
    return {
        type: "GET_ADDRESS_LIST",
        payload: list
    };
}
export const deleteItem = (index)=>{
    return {
        type: "DELETE_ITEM",
        payload: index
    };
}