//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    } 

    const db = client.db(databaseName)

   

    // db.collection('users').insertMany([
    //     {
    
    //         name: 'dj',
    //         age: 27
    //     }, {
    
    //         name: 'vikram',
    //         age:28
    //     }, {
    //         name: 'jen',
    //         age:28
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('unable to insert tasks!')
    //     }
    //     console.log(result.insertedIds)
    // })

    // db.collection('users').findOne({ _id: new ObjectID('62ed9517a32cbed6ba0e7a37')}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("62ed9517a32cbed6ba0e7a37")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    
    // db.collection('tasks').deleteOne({
    //     description: 'clean the house'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})
