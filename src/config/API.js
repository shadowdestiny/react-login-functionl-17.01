const API = {
    path: process.env.REACT_APP_PATH,
    baseName: process.env.REACT_APP_BASE_NAME,
    services : {
        auth: `${process.env.REACT_APP_PATH}/${process.env.REACT_APP_LOGIN}`
    }
}
export default API;
