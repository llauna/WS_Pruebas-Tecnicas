// export function procesarArchivo() {
//     fstat.readFile('input.txt', 'utf8', (error, contenido) => {
//         if (error) {
//             console.error('Error leyendo archivo:', error.mesage);
//             return false; //ESTA MAL
//         }

//         setTimeout(() => { NO TIENE NINGUN SETIDO HACER ESTE SETTIMEOUT
//             const textoProcesado = contenido.toUpperCase();

//             fs.writeFile('output.txt', textoProcesado, error => {
//                 if(error) {
//                     console.error('Error guardando archivo:', error.message);
//                     return false; //ESTA MAL

//                 console.log('Archivo procesado y guardado con éxito');
//                 return true
//             });
//         }, 1000);

        
//     });
// }

//----    CORRECCIONES    ----

export function procesarArchivo(callback) {
    fstat.readFile('input.txt', 'utf8', (error, contenido) => {
        if (error) {
            console.error('Error leyendo archivo:', error.mesage);
            callback(error)
        }
        const textoProcesado = contenido.toUpperCase();
        fs.writeFile('output.txt', textoProcesado, error => {
            if(error) {
                console.error('Error guardando archivo:', error.message);
                callback(error)
            }
                console.log('Archivo procesado y guardado con éxito');
                callback(null)
            });      
    });
}

procesarArchivo(() => {
    console.log('Esto ya funciona')
})