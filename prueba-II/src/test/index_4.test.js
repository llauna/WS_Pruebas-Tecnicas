import fs from 'node:fs';

export function leerArchivos() {
    console.time('leerArchivos')
    const archivo1 = fs.readFileSync('./archivo1.txt', 'utf8');
    const archivo2 = fs.readFileSync('./archivo2.txt', 'utf8');
    const archivo3 = fs.readFileSync('./archivo3.txt', 'utf8');
    console.timeEnd('leerArchivos')
    return '${archivo1} ${archivo2} ${archivo3}'
}

leerArchivos();