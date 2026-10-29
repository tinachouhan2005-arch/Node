const express = require('express')
const router = require('./router/router')
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())
app.use('/api/post',router)

module.exports=app