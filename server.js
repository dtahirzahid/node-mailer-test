// importing env file here
require('dotenv').config();
const app=require("./app");

const port=3001;

app.listen(port , ()=> console.log(`listening on port ${port}`))