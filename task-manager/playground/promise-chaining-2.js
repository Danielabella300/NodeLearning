require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndUpdate('62f2752fc1c3fc7782bc6f4f', {completed: true}).then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})      

Task.findOneAndDelete({completed: true}).then((task) => {
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
