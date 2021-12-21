const express = require('express');
const cors = require('cors'); /* This is New */
const app = express();
require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/person.routes')(app); /*This is New*/
app.listen(8000, () => console.log(`Listening on port: 8000`));
