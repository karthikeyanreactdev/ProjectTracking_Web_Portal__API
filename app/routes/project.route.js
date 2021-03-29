//
module.exports = app => {

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        )
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept ,authorization");
        if (req.method === 'OPTIONS') {
            res.header(
                "Access-Control-Allow-Methods",
                "GET, POST, OPTIONS, PUT, PATCH, DELETE"
            )
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept ,authorization");
            return res.status(200).json({});

        }
        next();
    });
    var VerifyToken = require('./VerifyToken');
    const projectController=require('../controller/project.controller');
    //const role = require("../_helpers/role");

    
   // app.post("/create_client",VerifyToken.verifyToken,VerifyToken.authorize([role.ClientAdmin,role.SuperAdmin,role.Employee]), projectController.create_client);
    app.post("/create", VerifyToken.verifyToken,projectController.createProject);
    app.post("/update", VerifyToken.verifyToken,projectController.updateProject);
    app.post("/updatestatus", VerifyToken.verifyToken,projectController.updateProjectstatus);
    app.get("/getall", VerifyToken.verifyToken,projectController.getallProjects);
    app.delete("/delete/:id", VerifyToken.verifyToken,projectController.deleteProject);
    app.get("/getbyid/:id",VerifyToken.verifyToken, projectController.getProjectbyid);


  };
  


