const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const session = require('express-session')
const FileStore = require('session-file-store')(session);
const flash = require("express-flash");

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());

app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function(){},
            // Local onde as sessões serão salvas (pasta sessions)
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 360000, // Um dia
            expires: new Date(Date.now() + 360000), // Expira em um dia
            httpOnly: true
        }
    }),
)

app.use(flash())

const conn = require('./db/conn');
const User = require('./models/User');

app.use(express.static('public'));  

const mainRoutes = require('./routes/mainRoutes')
app.use('/', mainRoutes)

const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes)

const dashboardRoutes = require('./routes/dashboardRoutes');
app.use('/dashboard', dashboardRoutes)

// Página 404
app.use(function(req, res) {
    res.status(404).render('auth/error.handlebars', {layout: 'error'})
})

conn
    .sync()
    //.sync({force: true})
    .then(() => {
        app.listen(3000);
    })
    .catch((error) => {
        console.log(error);
    })