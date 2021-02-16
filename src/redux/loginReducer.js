import axios from 'axios'


//state
const dataInitial = {
    fields: {
        userRef: "",
        userPass: "",
    },
    listRol: [],
    isShowModal: 'false',

    errors: {},
    isError: false
}

// types
const INITIAL_DATA = 'INITIAL_LOGIN_DATA'
const UPDATE_ELEMENT = 'UPDATE_LOGIN_ELEMENT'

//reducer
export default function loginReducer(state = dataInitial, action) {
    switch (action.type) {
        case INITIAL_DATA:
            return {
                ...state,
                dataInitial
            }
        case UPDATE_ELEMENT:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}
export const initialData = () => async (dispatch, getState) => {
    try{
        dispatch({
            type: INITIAL_DATA,
        })
    }catch(error){
        console.log(error)
    }

}

// borrar esta referencia de prueba
export const updateState = (stateObject) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_ELEMENT,
            payload: stateObject
        })
    } catch (error) {
        console.log(error)
    }

}
