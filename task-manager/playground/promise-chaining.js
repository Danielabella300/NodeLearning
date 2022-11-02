require('../src/db/mongoose')
const User = require('../src/models/user')

//62f2752fc1c3fc7782bc6f4e

User.findByIdAndUpdate('62f2752fc1c3fc7782bc6f4e', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})                  