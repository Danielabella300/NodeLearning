const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const me = new User({
//     name: 'Daniel',
//     age: 27,
//     email: 'emal@email.com',
//     password: 'blahblahblah'
// })

// const task = new Task({
//     description: 'Learn the mongoose library',
//     completed: false
// })


// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log("Error!", error)
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log("error!", error)
// })