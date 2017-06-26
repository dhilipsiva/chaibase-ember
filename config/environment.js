/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'chaibase',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    namespace: "api",
    pace:{
      theme: 'minimal',
      color: 'green',
    },
    notifications: {
      // IMPORTANT:
      // should be in sync with `animated` class in `sass/utilities/_animations.sass`
      animationDuration: 200, // Millisecons
      clearDuration: 5000,
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    endPoints: {
      browsers: 'browsers',
    },
    'ember-simple-auth': {
      loginEndPoint: 'login',
      checkEndPoint: 'check',
      logoutEndPoint: 'logout',
      routeAfterAuthentication: 'authenticated.index',
      routeIfAlreadyAuthenticated: 'authenticated.index',
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.host = "http://localhost:8000";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
