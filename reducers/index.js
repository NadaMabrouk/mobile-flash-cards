import {RECEIVE_ENTRIES} from '../actions'

export default function entries(state = {},action){
    console.log('reducer' + action.entries)
    switch(action.type){
        case RECEIVE_ENTRIES:
            return {
                ...state,
                ...action.entries
            }
        default:
            return state
    }
}