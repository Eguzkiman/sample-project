import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('auth', { path: '/' }, function() {
    this.route('books');
    this.route('authors');
    this.route('sales');
  });
});

export default Router;
