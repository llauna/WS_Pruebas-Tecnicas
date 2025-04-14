// import fs from 'node:fs';

// export function leerArchivos() {
//     console.time('leerArchivos')
//     const archivo1 = fs.readFileSync('../test/archivo1.txt', 'utf8');
//     const archivo2 = fs.readFileSync('../test/archivo2.txt', 'utf8');
//     const archivo3 = fs.readFileSync('../test/archivo3.txt', 'utf8');
//     console.timeEnd('leerArchivos')
//     return '${archivo1} ${archivo2} ${archivo3}'
// }

// leerArchivos();

// import { promises as fsp } from 'fs';

// export async function leerArchivos() {
//     console.time('leerArchivos')
//     const archivo1 = await fsp.readFile('../test/archivo1.txt', 'utf8');
//     const archivo2 = await fsp.readFile('../test/archivo2.txt', 'utf8');
//     const archivo3 = await fsp.readFile('../test/archivo3.txt', 'utf8');
//     console.timeEnd('leerArchivos')
//     return '${archivo1} ${archivo2} ${archivo3}'
// }

// leerArchivos();

import { promises as fsp } from 'fs';

export async function leerArchivos() {
    console.time('leerArchivos')
    const [archivo1, archivo2, archivo3] = await Promise.all ([
        fsp.readFile('../test/archivo1.txt', 'utf8'),
        fsp.readFile('../test/archivo2.txt', 'utf8'),
        fsp.readFile('../test/archivo3.txt', 'utf8'),
    ]).catch(err => {
        console.log(err)
        return []
    })
    console.timeEnd('leerArchivos')
    console.log(`${archivo1} ${archivo2} ${archivo3}`)
    return '${archivo1} ${archivo2} ${archivo3}'
}

leerArchivos();