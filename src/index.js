const express = require('express');
const routes = require('./presentation/Routes');
const {errors} = require('celebrate')
const app = express();

app.use(express.json())
app.use(routes)
app.use(errors())
app.listen(3000, () => {
  console.log('Server is running on port 3000');
})