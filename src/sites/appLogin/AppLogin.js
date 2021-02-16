import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './appLogin.scss';
import axios from 'axios';
import ListRol from "../../components/listRol";
import Modal from "../../components/modal";
import {initialData, updateState} from "../../redux/loginReducer";
import API from "../../config/API";

const AppLogin = () => {
    const dispatch = useDispatch();
    const state = useSelector(store => store.login);

    useEffect(() => {
        dispatch(initialData())
    }, [])

    const handleValidation = () => {
        let fields = state.fields;
        let errors = {};
        let formIsValid = true;
        const noEmptyText = "El campo no puede estar vacío"

        //username
        if (!fields["userRef"]) {
            formIsValid = false;
            errors["userRef"] = noEmptyText;
        }

        //userPassword
        if (!fields["userPass"]) {
            formIsValid = false;
            errors["userPass"] = noEmptyText;
        }

        setState({errors: errors, isError: !formIsValid});
        return formIsValid;
    }

    const setState = (state) => {
        console.log(state);
        dispatch(updateState(state))
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            const headers = {
                'Content-Type': 'application/json',
            };

            const user = {
                username: state.fields.userRef,
                password: state.fields.userPass,
                application: 'front_script',
            };
            axios.post(`${API.services.auth}`, user, {
                headers,
            })
                .then(res => {
                    const listRol = res.data;
                    setState({
                        listRol,
                        isShowModal: 'true'
                    });
                });

        }
    }

    const handleChange = (e) => {
        let fields = state.fields;
        fields[e.target.name] = e.target.value;
        setState({fields});
        handleValidation();
    }

    const handleClickCloseModal = () => {
        setState({isShowModal: 'false'});
    }

    const reHeight = state.isError ? {'height': '480px'} : {};
    return (
        <Fragment>
            <div className={"container-fluid"}>
                <div className="component-app-login mt-5">
                    <div className={"left"} style={reHeight}>
                        <div className="title-h2 align-content-center title-section">
                            <div className={"p-2"}>
                                Mantenedor de Productos
                            </div>
                        </div>
                    </div>
                    <div className={"right"}>
                        <div className={"form-section"}>
                            <div className="row text-left">
                                <div className={"col-12 p-5"}>
                                    <form name={"loginForm"} onSubmit={loginSubmit}>
                                        <div className="form-group text-center">
                                            <small id="password_ref" className="form-text text-muted">
                                                Inicio de sesión
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="user_ref">Usuario</label>
                                            <input type="text" className="form-control" id="user_ref"
                                                   aria-describedby="textHelp" placeholder="Usuario de red"
                                                   name={"userRef"}
                                                   onChange={handleChange} value={state.fields["userRef"]}
                                            />
                                            {state.errors["userRef"] &&
                                            <div className="alert alert-danger mt-2" role="alert">
                                                <span style={{color: "red"}}>{state.errors["userRef"]}</span>
                                            </div>}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="user_ref">Contraseña</label>
                                            <input type="password" className="form-control" id="password_ref"
                                                   aria-describedby="passwordHelp" placeholder="Contraseña del usuario"
                                                   name={"userPass"}
                                                   onChange={handleChange} value={state.fields["userPass"]}
                                            />

                                            {state.errors["userPass"] &&
                                            <div className="alert alert-danger mt-2" role="alert">
                                                <span style={{color: "red"}}>{state.errors["userPass"]}</span>
                                            </div>}
                                        </div>

                                        <div className="form-group text-center">
                                            <button type="submit" className="btn btn-primary"
                                                    onClick={loginSubmit}>Iniciar sesión
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <Modal
                                isshow={state.isShowModal}
                                onClick={handleClickCloseModal}>
                                <ListRol listrol={state.listRol}/>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AppLogin;
