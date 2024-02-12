const request = require('supertest');
const app = require('../../src/app');

test('Obtener lista de productos', async () => {
  const response = await request(app).get('/api/productos');

  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveLength(13);
});

test('Crear un nuevo producto', async () => {
  const nuevoProducto = { nombre: 'Producto X', precio: 10 };

  const response = await request(app)
    .post('/api/productos')
    .send(nuevoProducto);

  expect(response.statusCode).toBe(201);
  expect(response.body.nombre).toBe('Producto X');
});