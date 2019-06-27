import defaultState from "./state"
const homeReducer = (state = defaultState,action)=>{
    const {type,payload} = action;
    switch (type) {
        case 'GET_ADDRESS_LIST':
            state['addressList'] = payload
            return {...state}
        case 'DELETE_ITEM':
            const newState = JSON.parse(JSON.stringify(state));
            newState['addressList'].splice(payload,1)
            return newState
        default:
            return state
    }
}
export default homeReducer