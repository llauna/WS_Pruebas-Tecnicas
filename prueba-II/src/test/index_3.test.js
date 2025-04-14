
import { promises as fs } from 'fs';

export async function procesarArchivo() {
    try {
        const contenido = await fs.readFile('../solutions/input.txt', 'utf8');
        const textoProcesado = contenido.toUpperCase();
        await fs.writeFile('output.txt', textoProcesado);
        console.log('Archivo procesado y guardado con éxito');
    } catch (error) {
        console.error('Error procesando archivo:', error.message);
    }
}

procesarArchivo().then(() => {
    console.log('Esto ya funciona!');
});

