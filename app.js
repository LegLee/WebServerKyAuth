const express = require('express');
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser =require('body-parser');
const cors = require('cors')
const morgan = require('morgan')

const authRoutes = require('./routes/auth.js');
const sendMsgRoutes = require('./routes/sendMsg')
const addTokensRoutes = require('./routes/addTokens')
const adminPanelRoutes = require('./routes/adminPanel')
const keys = require('./config/keys.js')
const app = express();

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
},
                )
    .then(() => console.log('mongoDB connected'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport.js')(passport)




app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/', sendMsgRoutes)
app.use('/api/', addTokensRoutes)
app.use('/api', adminPanelRoutes)


module.exports = app;