### DESAFIO REPERTORIO

```
 La escuela de música “E-Sueño” 

```

## Instalar las dependencias para que nuestro código funcione:

npm install express pg

El servidor se inicia con:
node servidor.js

### DESAFÍO REPERTORIO

```
 Se realizó un repertorio;

 un proyecto que contiene un formulario para agregar canciones y enviarlo a la base de datos.

```

### CONSULTAS CRUD

```
Contiene las siguientes consultas CRUD:

1- Una ruta POST/cancion que reciba los datos correspondientes a una canción y realice a través de una función asíncrona la inserción en la tabla canciones.

2.Una ruta GET/canciones que devuelva un JSON con los registros de la tabla canciones.

3.Una ruta PUT/cancion/:id' que reciba los datos de una canción que se desea editar, ejecuta una función asíncrona para hacer la consulta SQL correspondiente y actualice ese registro de la tabla canciones.

4.Una ruta DELETE/cancion/:id' que reciba por queryString el id de una canción y realiza una consulta SQL a través de una función asíncrona para eliminarla de la base de datos.

```