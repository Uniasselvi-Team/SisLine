const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());

const conn = require('./db/conn');
const User = require('./models/User');

app.use(express.static('public'));

const mainRoutes = require('./routes/mainRoutes')
app.use('/', mainRoutes)

const authRoutes = require('./routes/authRoutes')
app.use('/', authRoutes)

conn
    .sync()
    .then(() => {
        app.listen(3000);
    })
    .catch((error) => {
        console.log(error);
    })