import React, {Component} from 'react';
import './appLogin.scss'

export default class appLogin extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
        return <div className={"container-fluid"}>
            <div className="component-app-login mt-5">
                <div className={"left"}>
                    <div className="title-h2 align-content-center title-section">
                        <div className={"p-2"}>
                            Gestión de Requerimientos Clientes
                        </div>
                    </div>
                </div>
                <div className={"right"}>
                    <div className={"form-section"}>
                        <div className="row text-left">
                            <div className={"col-12 p-5"}>
                                <form>
                                    <div className="form-group text-center">
                                        <small id="password_ref" className="form-text text-muted">
                                            Inicio de sesión
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_ref">Usuario</label>
                                        <input type="text" className="form-control" id="user_ref"
                                               aria-describedby="textHelp" placeholder="Usuario de red"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="user_ref">Contraseña</label>
                                        <input type="password" className="form-control" id="password_ref"
                                               aria-describedby="passwordHelp" placeholder="Contraseña del usuario"/>
                                    </div>

                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                                    </div>
                                </form>
                            </div>

                        </div>

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
