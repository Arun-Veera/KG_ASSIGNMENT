const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
let port = 4321;
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require('./app/routes/router')(app);


app.listen(port,()=>{
    console.log("Express is started and running in the port " +port);
});