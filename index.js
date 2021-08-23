const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.render('main'));
app.set('view engine', 'ejs')

app.listen(port, () => console.log(`O bot está rodando na porta: http://localhost:${port}`));