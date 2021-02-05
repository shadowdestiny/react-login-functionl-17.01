const API = {
    services : {
        listarProducto:"http://172.25.33.235:9082/APISinProductoTST/rest/listarProducto"
    },
    test : 'Prod',
    basename : '/canalweb',
    type_rol : {
        broker:{
            name : "broker",
            label : "Broker",
            code : "01660",
            description : "ROL_BROKER_CLRG",
            alias : "B"
        },
        preventor:{
            name : "preventor",
            label : "Preventor",
            code : "01662",
            description : "ROL_PREVENTOR_CLRG",
            alias : "P"
        },
        CT:{
            name : "CT",
            label : "",
            code : "",
            description : "",
            alias : "C"
        },
        ejecutivo:{
            name : "ejecutivo",
            label : "Ejecutivo",
            code : "",
            description : "",
            alias : "E"
        }
    }
}
export default API;
