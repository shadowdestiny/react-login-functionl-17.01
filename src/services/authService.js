import axios from "axios";
import API from "../config/API";
import ERROR from "../config/ERROR";

const AuthService = {

    auth: (user, dispatch, type) => {
        const headers = {
            'Content-Type': 'application/json',
        };

        axios.post(`${API.services.auth}`, user, {
            headers,
        })
            .then(res => {
                const listRol = res.data;
                dispatch({
                    type: type,
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
                    type: type,
                    payload: {
                        errors
                    }
                })
            } else if (err.request) {
                jsonDetails.error = ERROR.text.connection;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: type,
                    payload: {
                        errors
                    }
                })
            } else {
                jsonDetails.error = ERROR.text.error;
                let errors = {};
                errors['axios'] = jsonDetails.error;
                dispatch({
                    type: type,
                    payload: {
                        errors
                    }
                })
            }
        });

    }


}

export default AuthService;
