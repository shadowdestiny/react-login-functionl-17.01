const API = {
    path: process.env.REACT_APP_PATH,
    services : {
        auth: `${process.env.REACT_APP_PATH} ${process.env.REACT_APP_LOGIN}`
    }
}
export default API;
