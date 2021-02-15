import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom'

// hooks react redux
import { useDispatch, useSelector } from 'react-redux'
import { initialData, obtenerRecursosPaginadosAccion, getEditingElement, deleteElement } from '../redux/ducksReducer'

const Recursos = () => {

    const dispatch = useDispatch()
    const recursos = useSelector(store => store.recursos.array)
    const pagina = useSelector(store => store.recursos.pagina)

    //useEffect(() => {
    //  dispatch(initialData()) 
    //}, [])

    return ( 

        <Fragment>
            <button className="button muted-button" onClick={() => dispatch(obtenerRecursosPaginadosAccion(20))}>Página {pagina} - Ir a Página {pagina + 1}</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Url</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recursos.length > 0 ? 
                        recursos.map(element => (
                                <tr key={element.name}>
                                    <td>{element.name}</td>
                                    <td>{element.url}</td>
                                    <td>
                                        <Link to={"/editElement"}><button className="button muted-button" onClick={() => dispatch(getEditingElement({ name: element.name, url: element.url }))}>Edit</button></Link>
                                        <button className="button muted-button" onClick={() => dispatch(deleteElement(element.name))}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        :(
                            <tr>
                                <td colSpan={3}>No hay Elementos resgitrados!</td>
                            </tr>
                        )
                        
                        
                    }
                
                </tbody>
            </table>
        </Fragment> 
    );
}
 
export default Recursos;
