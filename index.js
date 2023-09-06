const express = require("express")

const employeeRoutes = require("./controllers/employeeController")
const userRoutes = require("./routes/userRoutes")
const db = require("./db/mysql")
const mongodb = require("./db/mongodb")

// config
const app = express()

//middleware
app.use(express.json())

app.use("/api/employee", employeeRoutes)
app.use("/api/user", userRoutes)



// check db connection
// 1st connect with mysql, 
// 2nd connect with mongodb then 
// 3rd start server at 3000 port

db.query("select 1")
    .then(res => {
        console.log("✅MysQl connection successful \n")

        mongodb.then(()=>{
            console.log("✅ MongoDB connected ✅")
            app.listen(process.env.SERVER_PORT, console.log(`Server running on port ${process.env.SERVER_PORT}`))
        }).catch(err => {
            console.log("❌ MongoDB connection failed ❌\n ", err )
        })
        
    })
    .catch(err => console.log("❌MysQl connection failed❌", err))




