var React = require('react');
var ReactRouter = require('react-router');


var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var Main = require('./components/main');
var Topic= require('./components/topic');


var routes = (
    <Router >
      <Route path="/" component={Main}>
        <Route path="topics/:id" component={Topic} />
      </Route>
    </Router>
);
module.exports = routes;