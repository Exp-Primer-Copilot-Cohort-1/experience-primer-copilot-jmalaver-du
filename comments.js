// Create web server
var express = require('express');
var router = express.Router();

// Create database connection
var db = require('../db');

// Get all comments
router.get('/', function(req, res, next) {
  db('comments').select().then(function(comments){
    res.send(comments);
  });
});

// Get one comment
router.get('/:id', function(req, res, next) {
  db('comments').select().where({id: req.params.id}).then(function(comments){
    res.send(comments[0]);
  });
});

// Add a comment
router.post('/', function(req, res, next) {
  db('comments').insert(req.body).then(function(id){
    res.send(id);
  });
});

// Update a comment
router.put('/:id', function(req, res, next) {
  db('comments').where({id: req.params.id}).update(req.body).then(function(count){
    res.send(count + '');
  });
});

// Delete a comment
router.delete('/:id', function(req, res, next) {
  db('comments').where({id: req.params.id}).del().then(function(count){
    res.send(count + '');
  });
});

module.exports = router;