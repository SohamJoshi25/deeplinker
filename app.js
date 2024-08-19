const express = require("express")
const mongoose = require('mongoose')
const router = require('./routers/router.app.js')
require('dotenv').config()

const app = express();

 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use('/',router) 

mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('Started and Connected to DB at port ',process.env.PORT);
    });
}).catch((e)=>{
    console.log(e);
});
 