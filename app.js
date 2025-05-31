const express = require('express');
const app = express();
const path = require('path');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Middleware to parse form data (must be added)
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.render('home'));
app.get('/help', (req, res) => res.render('help'));
app.get('/login', (req, res) => res.render('login'));

// ✅ POST route for login form
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'mamtha' && password === '2302') {
    res.send('✅ Login successful!');
  } else {
    res.send('❌ Invalid credentials');
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
