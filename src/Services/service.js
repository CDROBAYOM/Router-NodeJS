/* const { Storage } = require('@google-cloud/storage');

async function leerArchivo(nombreBucket, nombreArchivo) {
  const storage = new Storage();
  const bucket = storage.bucket(nombreBucket);
  const archivo = bucket.file(nombreArchivo);

  try {
    const contenido = await archivo.download();
    const contenidoString = contenido.toString();
    console.log(`Contenido del archivo ${nombreArchivo}:`, contenidoString);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}

// Reemplaza con el nombre de tu bucket y el nombre del archivo
const nombreBucket = 'mi-bucket';
const nombreArchivo = 'mi-archivo.txt';

leerArchivo(nombreBucket, nombreArchivo);
 */
