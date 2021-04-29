import { getEntries } from "../utils/api"

const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'

export function receiveEntries(entries){
    return {
        type: RECEIVE_ENTRIES,
        entries
    }
}

export function handleInitialData(){
    return (dispatch) => {
         getEntries()
        .then(entries => {
            console.log('handle function' + entries)
            dispatch(receiveEntries(entries))
        })
    }
}
