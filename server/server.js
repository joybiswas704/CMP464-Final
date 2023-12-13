const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json()); // Parse JSON request body
app.use(cors());

const PORT = 3000;

const clientPath = path.resolve(__dirname, '../client/vite-project/dist');

app.use(express.static(clientPath));

const pool = new Pool({
     host: 'localhost',
     user: 'postgres',
     port: 5433,
     password: '2485',
     database: 'buzCart-dev-db',
});

app.get('/', (req, res) => {
     res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

// Endpoint to retrieve and send Products data from PostgreSQL
app.get('/api/products', async (req, res) => {
     try {
          // Query the database
          const client = await pool.connect();
          const queryResult = await client.query('SELECT * FROM products');
          client.release(); // Release the client back to the pool

          // Convert the database result to JSON
          const jsonData = queryResult.rows;
          console.log(jsonData);

          // Send the JSON data as the response
          res.json(jsonData);
     } catch (error) {
          console.error('Error fetching products from the database:', error);
          res.status(500).json({ error: 'Internal Server Error' });
     }
});

// Endpoint to delete Product from PostgreSQL
app.delete('/api/products/:id', async (req, res) => {
     try {
          // Query the database
          const client = await pool.connect();
          const queryResult = await client.query(
               `DELETE FROM products WHERE id=${req.params.id}`
          );
          client.release(); // Release the client back to the pool

          // Convert the database result to JSON
          const jsonData = queryResult.rows;
          console.log(jsonData);

          // Send the JSON data as the response
          res.json(jsonData);
     } catch (error) {
          console.error('Error deleting product in the database:', error);
          res.status(500).json({ error: 'Internal Server Error' });
     }
});

// Endpoint to retrieve and send orders data
app.get('/api/orders', async (req, res) => {
     try {
          // Query the database
          const client = await pool.connect();
          const queryResult = await client.query('SELECT * FROM orders');
          client.release(); // Release the client back to the pool

          // Convert the database result to JSON
          const jsonData = queryResult.rows;
          console.log(jsonData);

          // Send the JSON data as the response
          res.json(jsonData);
     } catch (error) {
          console.error('Error fetching orders from the database:', error);
          res.status(500).json({ error: 'Internal Server Error' });
     }
});

// Endpoint to add order
app.post('/api/orders', async (req, res) => {
     try {
          const { id, name, price } = req.body[0];
          console.log(id, name, price);

          // Query the database
          const client = await pool.connect();
          const queryResult = await client.query(
               `INSERT INTO orders VALUES(${id}, '${name}', ${price}, ${1})`
          );
          client.release(); // Release the client back to the pool

          // Convert the database result to JSON
          const jsonData = queryResult.rows;
          console.log(jsonData);

          // Send the JSON data as the response
          res.json(jsonData);
     } catch (error) {
          console.error('Error creating order in the database:', error);
          res.status(500).json({ error: 'Internal Server Error' });
     }
});

// Endpoint to add product
app.post('/api/products', async (req, res) => {
     try {
          const { id, name, price, des, img } = req.body;

          // Query the database
          const client = await pool.connect();
          const queryResult = await client.query(
               `INSERT INTO products VALUES(${id}, '${name}', ${price}, '${des}', '${img}')`
          );
          client.release(); // Release the client back to the pool

          // Convert the database result to JSON
          const jsonData = queryResult.rows;
          console.log(jsonData);

          // Send the JSON data as the response
          res.json(jsonData);
     } catch (error) {
          console.error('Error inserting product in the database:', error);
          res.status(500).json({ error: 'Internal Server Error' });
     }
});

app.listen(PORT, () => {
     console.log(`Server listening on port ${PORT}`);
});
