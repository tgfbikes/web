var Restaurant = require('../models/restaurant.js');

var RestaurantsController = {
  index: function (req, res) {
    Restaurant.find({}, function (err, restaurants) {
      if (req.params.format == 'json') {
        res.json(restaurants);
      } else {
        res.render('restaurants/index', {
          restaurants: restaurants
        });
      }
    });
  },

  new: function (req, res) {
    res.render('restaurants/new', {});
  },

  create: function (req, res) {
    var restaurant = new Restaurant({
      name: req.body.name,
      type: req.body.type,
      phone: req.body.phone
    });

    restaurant.save(function (err, restaurant) {
      if (req.params.format == 'json') {
        res.status(201).json(restaurant);
      } else {
        res.redirect('/restaurants');
      }
    });
  },

  show: function (req, res) {
    Restaurant.findOne({_id: req.params.id}, function (err, restaurant) {
      if (req.params.format == 'json') {
        res.json(restaurant);
      } else {
        res.render('restaurants/show', {
          restaurant: restaurant
        });
      }
    });
  },

  edit: function (req, res) {
    Restaurant.findOne({_id: req.params.id}, function (err, restaurant) {
      res.render('restaurants/edit', {
        restaurant: restaurant
      });
    });
  },

  update: function (req, res) {
    Restaurant.findOneAndUpdate({_id: req.params.id}, {
      name: req.body.name,
      type: req.body.type,
      phone: req.body.phone
    }, function (err, restaurant) {
      if (req.params.format == 'json') {
        res.status(200).json(restaurant);
      } else {
        res.redirect('/restaurants/' + req.params.id);
      }
    });
  },

  destroy: function (req, res) {
    Restaurant.remove({_id: req.params.id}, function (err) {
      if (req.params.format == 'json') {
        res.status(204).send('');
      } else {
        res.redirect('/restaurants');
      }
    });
  }

};

module.exports = RestaurantsController;
