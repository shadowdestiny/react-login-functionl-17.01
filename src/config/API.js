const API = {
    path: process.env.REACT_APP_PATH,
    baseName: process.env.REACT_APP_BASE_NAME,
    application: process.env.REACT_APP_APPLICATION,
    services : {
        auth: `${process.env.REACT_APP_PATH}/${process.env.REACT_APP_LOGIN}`
    }
}
export default API;
