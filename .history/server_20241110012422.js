const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware para parsear el body de las solicitudes
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
// Base de datos mock de usuarios
const mockUsers = [
  {
    id: 1,
    username: 'usuario1',
    password: 'password1'
  },
  {
    id: 2,
    username: 'usuario2',
    password: 'password2'
  }
];

// Endpoint de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = mockUsers.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({ message: 'Login exitoso', user });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor mock escuchando en http://localhost:${PORT}`);
});
