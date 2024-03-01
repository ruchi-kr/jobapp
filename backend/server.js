const express = require('express');                      //importing express,node framework
const cors = require('cors');                            //importing cors (for connecting frontend to backend)
const mongoose = require('mongoose');                    //importing mongoose for database
const { MONGOBD_URL } = require('./config')              //importing MONGOBD_URL
const app = express();
app.use(cors());                                         //using cors
app.use(express.json());                                 //using express json
const morgan= require('morgan');
app.use(morgan('tiny'));
mongoose.connect(MONGOBD_URL);                           //connecting to mongodb database using mongoose library

mongoose.connection.on('connected', () => {
    console.log("DB is connected");
})
mongoose.connection.on('error', (error) => {
    console.log("Some error occured while connecting to DB");
})

require('./models/user_model');                       //importing user model
require('./models/jobs_model');                      //importing jobs model
require('./models/employer_model');                    //importing employer model

app.use(require('./routes/user_route'));              //importing user route
app.use(require('./routes/employer_route'));          //importing employer route
app.use(require('./routes/apply_jobs_route'));

const Add_Jobs_Router = require('./routes/jobs_route');
app.use('/addjob', Add_Jobs_Router);                      //importing jobs route
// app.use('/totaldata', Add_Jobs_Router);
app.use(require('./routes/jobs_route'));

const Apply_Jobs_Router = require('./routes/apply_jobs_route');
app.use("/applyjob", Apply_Jobs_Router);

// const User_Router = require('./routes/apply_jobs_route');
// app.use("/applyjob", Apply_Jobs_Router);


app.listen(5000, () => {                                 //listening on port 5000
    console.log("Server has started on port 5000");
});