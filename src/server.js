import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

configViewEngine(app)

app.get('/', (req, res) => {
  res.render('test/index.ejs')
})

app.get('/', (req, res) => {
  res.send('Hello World1111!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})