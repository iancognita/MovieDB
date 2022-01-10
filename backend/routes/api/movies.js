const express = require ("express");
const router = express.Router();
const Movies = require("../../models/Movies");
const moviesCtrl = require("../../controllers/moviesController")


//Get all movies
router.route('/allmovies').get(moviesCtrl.getAllMovies);

//Get movie by id
router.route('/:id').get(moviesCtrl.getMovieById);

module.exports = router;