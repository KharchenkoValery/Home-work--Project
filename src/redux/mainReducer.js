import { types } from "./types"
const initialState = {
    title: 'GeekTech',
    contactsTitle: ''

}


export default function mainReducer(state = initialState, action) {

    if(action.type === types.CHANGE_TITLE) {
       return {title: "GEEKS"} 
    } 
        

    return state
}