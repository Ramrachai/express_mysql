const express = require("express")
const employeeRoutes = require("./controllers/employeeController")
const db = require("./db")

// config
const app = express()

//middleware
app.use(express.json())


app.use("/api/employee", employeeRoutes)

//check db connection
db.query("select 1")
    .then(res => {
        console.log("Database connection successful \n")
        app.listen(3000, console.log("Server running on port 3000"))
    })
    .catch(err => console.log("Database connection failed", err))




