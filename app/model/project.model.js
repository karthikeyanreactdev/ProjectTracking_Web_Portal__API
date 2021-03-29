// importing pool to connect DB
const pool = require("../../db");

// This function creates project entry in DB
exports.create = async (data) => {
    const projectCreate = await pool.query(
        "INSERT INTO projects (projectname,startdate,status) VALUES($1,$2,$3) RETURNING *",
        [data.projectname, data.startdate, data.status]
    );
    return projectCreate.rows;
};

// This function updates a existing project entry in DB
exports.update = async (data) => {
    const projectUpdate = await pool.query(
        "UPDATE  projects SET projectname=$1 WHERE id = $2 RETURNING *",
        [data.projectname, data.id]
    );
    return projectUpdate.rows;
};

// This function updates a project status in DB
exports.updateStatus = async (data) => {
    const projectStatus = await pool.query(
        "UPDATE  projects SET status=$1 , enddate=$2 WHERE id = $3 RETURNING *",
        [data.status,data.enddate, data.id]
    );
    return projectStatus.rows;
};

// This function get project based on id from DB
exports.getbyid = async (id) => {
    const project = await pool.query("SELECT * FROM projects WHERE id = $1", [
        id
    ]);
    return project.rows[0];
};

// This function get all projects from DB
exports.getall = async () => {
    const allProject = await pool.query(
        "SELECT *FROM projects");
    return allProject.rows;
};

// This function deletd a project based on id in DB
exports.deletebyid = async (id) => {
    const projectDelete = await pool.query(
        "DELETE  FROM projects WHERE  id=$1", [id]);
    return projectDelete;
}