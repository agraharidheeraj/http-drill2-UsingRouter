const express = require('express');

const app = express();
const port = 8000;

const htmlRoute = require('./route/html');
const jsonRoute = require('./route/json');
const uuidRoute = require('./route/uuid');
const delayRoute = require('./route/delay');

const CustomErrorRoute = require('./middleware/customErrorHandler');
const NotfoundRoute = require('./middleware/notFoundHandler');

app.use(htmlRoute);
app.use(jsonRoute);
app.use(uuidRoute);
app.use(delayRoute);

app.use(CustomErrorRoute);
app.use(NotfoundRoute);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
