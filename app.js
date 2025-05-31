const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('home'));
app.get('/help', (req, res) => res.render('help'));
app.get('/login', (req, res) => res.render('login'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'mamtha' && password === '2302') {
    res.send('✅ Login successful!');
  } else {
    res.send('❌ Invalid credentials');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
