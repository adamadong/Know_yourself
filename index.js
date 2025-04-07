import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import bodyParser from 'body-parser';

// Import routes
import pageRoutes from './routes/pageRoutes.js';
import apiRoutes from './routes/apiRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

// Middleware setup
app.use("/static", express.static(path.join(__dirname, '/static')));
app.use(bodyParser.json());

// Routes
app.use('/', pageRoutes);
app.use('/api', apiRoutes);

// 404 handler
app.use(function (req, res) {
    console.log("et c'est le 404 : " + req.url);
    
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    
    res.end("<html><head><title>la quatre cent quatre</title></head><body><img src=\"https://upload.wikimedia.org/wikipedia/commons/b/b4/Peugeot_404_Champs.jpg\" /></body></html>");
});

// Start server
app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);