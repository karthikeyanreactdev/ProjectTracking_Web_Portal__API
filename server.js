const express= require("express");
const cors= require("cors");
const bodyParser = require("body-parser");
const pool = require("./db");
const app=express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "50mb", extended: true }));
// to avoid cros error
app.use(cors());
app.use(express.json());

// binding end ponints route in server
require('./app/routes/project.route')(app);
require('./app/routes/user.route')(app);

const port = 8080;
app.listen(port,()=>{    
    console.log("Server running on Port : "+port);
})