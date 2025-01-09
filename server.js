const express = require('express');
const pool = require('./db');
const app = express();

app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Serveur Express opérationnel!');
});

// Endpoint pour tester la base de données
app.get('/api/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur serveur');
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
