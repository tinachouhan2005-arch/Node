const cl = console.log

const app = require('./app')
const port = process.env.PORT||3000

app.listen(port,()=>{
    cl(`Server is running on the port ${port}`)
})
