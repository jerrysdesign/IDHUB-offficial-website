const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'idhubcms';

const getdb = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function(err, client) {
      const db = client.db(dbName)
      if(err){
        reject(err)
      }else{
        resolve(db, client)
      }
    })
  })
}

module.exports = {
  getdb,
}
