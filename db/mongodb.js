const mongoose = require('mongoose')
require('dotenv').config
 
const conn = mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
      w: 'majority'
    }
  })

module.exports = conn
