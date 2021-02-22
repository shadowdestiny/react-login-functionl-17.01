import axios from 'axios'


//state
const dataInitial = {
  array:{},
  offset: 0,
  pagina: 0,
  editingElement: {}
}

// types
const INITIAL_DATA = 'INITIAL_DATA'
const GET_RECURSOS_PAGINADOS_SUCCESS = 'GET_RECURSOS_PAGINADOS_SUCCESS'
const ADD_RECURSO_SUCCESS = 'ADD_RECURSO_SUCCESS'
const GET_EDITING_ELEMENT = 'GET_EDITING_ELEMENT'
const UPDATE_ELEMENT = 'UPDATE_ELEMENT'
const DELETE_ELEMENT = 'DELETE_ELEMENT'

//reducer
export default function recursosReducer(state = dataInitial, action){
    switch(action.type){
        case INITIAL_DATA:
            return {
                ...state, 
                array: action.payload.datas, 
                offset: action.payload.offset,
                pagina: action.payload.pagina 
            }
        case GET_RECURSOS_PAGINADOS_SUCCESS:
            return {
                ...state, 
                array: action.payload.datas, 
                offset: action.payload.offset,
                pagina: action.payload.pagina 
            }
        case ADD_RECURSO_SUCCESS:
            return {
                ...state, array: [...state.array, action.payload.elemento]
            }  
        case GET_EDITING_ELEMENT:
            return {
                ...state, 
                editingElement: action.payload.element
            }  
        case UPDATE_ELEMENT:
            return {
                ...state, 
                array: state.array.map(e => e.name === state.editingElement.name ? action.payload.element : e),
                editingElement: {}
            } 
        case DELETE_ELEMENT:
            return {
                ...state, 
                array: state.array.filter(e => e.name !== action.payload.elementToDeleteName)
            }              
                     
        default:
             return state
    }
} 

//acciones
export const initialData = () => async (dispatch, getState) => {
    try{
        const offset = getState().recursos.offset
        const pagina = getState().recursos.pagina 
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
        dispatch({
            type: INITIAL_DATA,
            payload: {
                datas: resp.data.results,
                offset: offset,
                pagina: pagina
            }
        })
    }catch(error){
        console.log(error)
    }

}

export const obtenerRecursosPaginadosAccion = (count) => async (dispatch, getState) => {
    try{
        const offset = getState().recursos.offset
        const pagina = getState().recursos.pagina 
        const next = offset + count
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=10`)
        dispatch({
            type: GET_RECURSOS_PAGINADOS_SUCCESS,
            payload: {
                datas: resp.data.results,
                offset: next,
                pagina: pagina + 1
            }
        })
    }catch(error){
        console.log(error)
    }

}

export const addElement = (element) => (dispatch, {}) =>{
    try{
        dispatch({
            type: ADD_RECURSO_SUCCESS,
            payload: {
                elemento: element
            }
        })
    }catch(error){
        console.log(error)
    }
} 

export const getEditingElement = (element) => (dispatch, {}) =>{
    try{
        dispatch({
            type: GET_EDITING_ELEMENT,
            payload: {
                element: element
            }
        })
    }catch(error){
        console.log(error)
    }
}

export const updateElement = (element) => (dispatch, {}) =>{
    try{
        dispatch({
            type: UPDATE_ELEMENT,
            payload: {
                element: element
            }
        })
    }catch(error){
        console.log(error)
    }
}

export const deleteElement = (elementToDeleteName) => (dispatch, {}) =>{
    try{
        dispatch({
            type: DELETE_ELEMENT,
            payload: {
                elementToDeleteName: elementToDeleteName
            }
        })
    }catch(error){
        console.log(error)
    }
}
