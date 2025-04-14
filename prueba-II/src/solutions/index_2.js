//export function obtenerDatosPromise(callback) {
//    setTimeout(() => {
//        callback(null, { data: 'datos importantes' });
//    },2000);
//}

//import { rejects } from "assert"; -> NO SE UTILIZA NUNCA


//pasamos de callback del apartado superior a promise

export function obtenerDatosPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve( { data: 'datos importantes' });
        },2000);
    })  
}

//obtenerDatosPromise ((err, info) => {
//    console.log(info)
//})

    //Promise.then()
    obtenerDatosPromise()
    .then(info => {
        console.log(info)
    })
    .catch(error => {
        console.error(error)
    })

    //await
    try {
        const info = await obtenerDatosPromise()
        console.log(info)
    } catch (error) {
        console.error(error)
    }
    