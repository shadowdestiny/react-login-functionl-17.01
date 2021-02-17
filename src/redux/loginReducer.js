import axios from 'axios'
import API from "../config/API";
import ERROR from "../config/ERROR";

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
export const initialData = () => async (dispatch, {}) => {
    try {
        dispatch({
            type: INITIAL_DATA,
        })
    } catch (error) {
        console.log(error)
    }

}

export const updateState = (stateObject) => async (dispatch, {}) => {
    try {
        dispatch({
            type: UPDATE_ELEMENT,
            payload: stateObject
        })
    } catch (error) {
        console.log(error)
    }
}

export const auth = (user) => async (dispatch,) => {
    try {

        const headers = {
            'Content-Type': 'application/json',
        };

        axios.post(`${API.services.auth}`, user, {
            headers,
        })
            .then(res => {
                const listRol = res.data;
                dispatch({
                    type: UPDATE_ELEMENT,
                    payload: {
                        listRol,
                        isShowModal: 'true'
                    }
                })
            }).catch((err) => {
            let jsonDetails = {};
            if (err.response) {
                jsonDetails.error = err.response.data.errorMessage;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: UPDATE_ELEMENT,
                    payload: {
                        errors
                    }
                })
            } else if (err.request) {
                jsonDetails.error = ERROR.text.connection;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: UPDATE_ELEMENT,
                    payload: {
                       errors
                    }
                })
            } else {
                jsonDetails.error = ERROR.text.error;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: UPDATE_ELEMENT,
                    payload: {
                        errors
                    }
                })
            }
        });


    } catch (error) {
        console.log(error)
    }

}
