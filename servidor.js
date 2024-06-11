// servidor.js
const express = require('express');
const path = require('path');
const { agregarCancion, obtenerCanciones, editarCancion, eliminarCancion } = require('./consultas');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/cancion', async (req, res) => {
    const { titulo, artista, genero } = req.body;
    try {
      const result = await agregarCancion(titulo, artista, genero);
      res.status(201).send(`Canción agregada correctamente con id ${result.rows[0].id}`);
    } catch (error) {
      console.error('Error al agregar canción', error);
      res.status(500).send('Error al agregar canción');
    }
  });

app.get('/canciones', async (req, res) => {
  try {
    const canciones = await obtenerCanciones();
    res.json(canciones.rows);
  } catch (error) {
    console.error('Error al obtener canciones', error);
    res.status(500).send('Error al obtener canciones');
  }
});

app.put('/cancion/:id', async (req, res) => {
  const id = req.params.id;
  const { titulo, artista, genero } = req.body;
  try {
    await editarCancion(id, titulo, artista, genero);
    res.send('Canción actualizada correctamente');
  } catch (error) {
    console.error('Error al actualizar canción', error);
    res.status(500).send('Error al actualizar canción');
  }
});

app.delete('/cancion/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await eliminarCancion(id);
    res.send('Canción eliminada correctamente');
  } catch (error) {
    console.error('Error al eliminar canción', error);
    res.status(500).send('Error al eliminar canción');
  }
});

app.listen(port, () => {
  console.log(`Servidor esta corriendo en http://localhost:${port}`);
});