var path = require('path');
var express = require('express');
var webpack = require('webpack');
var app = express();
var mog = require('./utils/mongoc');
const core = require('mongodb-core');
const ObjectId = core.BSON.ObjectID;
var cors = require('cors');
var jsdata = require('./data/blog.json');

app.use(cors({credentials: true, origin: true}))

// api for get categories keys
app.get('/api/v1/blog/categories', function(req, res) {
  mog.getdb()
  .then((db,client) => {
    const collection = db.collection('postcategories')
    collection.find({}).toArray(function(err, docs) {
      if (err) {
        res.json({
          error: o
        })
      }else{
        res.json({
          data: docs,
        })
      }
    })
  })
  .catch(o => {
    res.json({
      error: o
    })
  })
})

// api for get categories keys
app.get('/api/v1/blogs/:type', function(req, res) {
  const typeid = req.params.type
  mog.getdb()
  .then((db,client) => {
    const collection = db.collection('posts')
    collection.find({categories: ObjectId(typeid)}).toArray(function(err, docs) {
      if (err) {
        res.json({
          error: o
        })
      }else{
        res.json({
          data: docs,
        })
      }
    })
  })
  .catch(o => {
    res.json({
      error: o
    })
  })
})

// api for get categories keys
app.get('/fake_api/v1/blogs/:type', function(req, res) {
  res.json({
    ...jsdata,
  })
})

app.listen(3001, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3001');
});
