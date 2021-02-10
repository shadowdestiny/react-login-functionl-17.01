import React, {Component} from 'react';
import './appLogin.scss';
import axios from 'axios';
import ListRol from "../../components/listRol";
import Modal from "../../components/modal";

export default class appLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                userRef: "",
                userPass: "",
            },
            listRol: [],
            isShowModal: 'false',

            errors: {},
            isError: false
        };

        this.loginSubmit = this.loginSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleValidation() {
        let fields = this.state.fields;
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

        this.setState({errors: errors, isError: !formIsValid});
        return formIsValid;
    }

    loginSubmit = (e) => {
        e.preventDefault();
        if (this.handleValidation()) {
            const headers = {
                'Content-Type': 'application/json',
            };

            const user = {
                username: this.state.fields.userRef,
                password: this.state.fields.userPass,
                application: 'front_script',
            };
            axios.post(`https://api-proxy-dev.adrfsc.cl/frontscript/login`, user, {
                headers,
            })
                .then(res => {
                    const listRol = res.data;
                    this.setState({
                        listRol,
                        isShowModal: 'true'
                    });
                });

        }
    }

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({fields});
        this.handleValidation();
    }

    render() {
        const reHeight = this.state.isError ? {'height': '480px'} : {};
        return <div className={"container-fluid"}>
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
                                <form name={"loginForm"} onSubmit={this.loginSubmit}>
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
                                               onChange={this.handleChange} value={this.state.fields["userRef"]}
                                        />
                                        {this.state.errors["userRef"] &&
                                        <div className="alert alert-danger mt-2" role="alert">
                                            <span style={{color: "red"}}>{this.state.errors["userRef"]}</span>
                                        </div>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="user_ref">Contraseña</label>
                                        <input type="password" className="form-control" id="password_ref"
                                               aria-describedby="passwordHelp" placeholder="Contraseña del usuario"
                                               name={"userPass"}
                                               onChange={this.handleChange} value={this.state.fields["userPass"]}
                                        />

                                        {this.state.errors["userPass"] &&
                                        <div className="alert alert-danger mt-2" role="alert">
                                            <span style={{color: "red"}}>{this.state.errors["userPass"]}</span>
                                        </div>}
                                    </div>

                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-primary"
                                                onClick={this.loginSubmit}>Iniciar sesión
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Modal isshow={this.state.isShowModal}>
                            <ListRol listrol={this.state.listRol}/>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>;
    }
}
// export default connect(
//     ({ appLogin }) => ({ ...appLogin }),
//     dispatch => bindActionCreators({ ...appLoginActions }, dispatch)
//   )( appLogin );
