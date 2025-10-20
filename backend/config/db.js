import pkg from "pg";
const {Pool}=pkg;
const pool=new Pool({
    host:"localhost",
    user:"postgres",
    password:"chatonnofy",
    database:"messageDB",
    port:"5432"
})
 
async function ConnectDb(){
    try {
        const res=await pool.query("SELECT NOW()");
        console.log("connexion  au bd reussi", res.rows[0]);
    } catch (error) {
        console.log("ereeur de connection au bd"+ error);
        
    }
}
ConnectDb();
export default pool;