const projectRoute = require("../model/project.model.js");

// This controller function handles create new project request and response 
exports.createProject = async (req, res) => {
    try {
        const params = {
            projectname: req.body.projectName,
            startdate: new Date(),
            status: 'InComplete',
        }
        const createEntry = await projectRoute.create(params);
        res.status(200).send({
            message: "Project Created Successfully",
        });
    } catch (err) {
        res.status(500).send({
            message: "Project Creatation Failed. Due to Error : " + err,
        });
    }
};

// This controller function handles updates existing project request and response 
exports.updateProject = async (req, res) => {
    try {
        const params = {
            id: req.body.id,
            projectname: req.body.projectName,
        }
        const updateEntry = await projectRoute.update(params);
        res.status(200).send({
            message: "Project Updated Successfully",
        });
    } catch (err) {
        res.status(500).send({
            message: "Project Updation Failed. Due to Error : " + err,
        });
    }
};

// This controller function handles updates existing project request and response 
exports.updateProjectstatus = async (req, res) => {
    try {
        const status = req.body.status;
        var date=null;
        if (status === "Completed") {
                 date= new Date()
            
        } else if (status === "InCompleted"){
           date=null
        }

       const params = {
            id: req.body.id,
            status: status,
            enddate: date
        }
        
        const updateStatus = await projectRoute.updateStatus(params);
        res.status(200).send({
            message: "Project status Updated Successfully",
        });
    } catch (err) {
        res.status(500).send({
            message: "Project status Updation Failed. Due to Error : " + err,
        });
    }
};

// This controller function handles updates existing project request and response 
exports.getProjectbyid = async (req, res) => {
    try {
        const id = req.params.id
        const Project = await projectRoute.getbyid(id);
        res.status(200).send({
            data: Project,
            message: "Project status Updated Successfully",
        });
    } catch (err) {
        res.status(500).send({
            data: [],
            message: "Project status Updation Failed. Due to Error : " + err,
        });
    }
};

// This controller function handles get  all projects request and response 
exports.getallProjects = async (req, res) => {
    try {
        const projects = await projectRoute.getall();
        res.status(200).send({
            data: projects,
            message: "All Projects Fetched Successfully.",
        });
    } catch (err) {
        res.status(500).send({
            data: [],
            message: "All Projects Fetching Failed. Due to Error : " + err,
        });
    }
};


// This controller function handles updates existing project request and response 
exports.deleteProject = async (req, res) => {
    try {
        const id = req.params.id
        const Project = await projectRoute.deletebyid(id);
        res.status(200).send({
            message: "Project Deleted Successfully",
        });
    } catch (err) {
        res.status(500).send({
            message: "Project Deletion Failed. Due to Error : " + err,
        });
    }
};

