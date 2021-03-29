// importing pool to connect DB
const pool = require("../../db.js");

// This function get user details from DB
exports.Userlogin= async (username) => {
  const loginuser = await pool.query("SELECT * FROM users where name=$1",[username]);
  return loginuser.rows;
};

