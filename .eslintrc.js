module.exports = {
    "extends": "airbnb-base",
     'rules': {
      'no-underscore-dangle': 'off',
      "no-console": 0,
      "space-in-parens": 0,
      "no-plusplus": 0,
      "no-use-before-define": 0,
      "padded-blocks": 0,
      "no-param-reassign": 0,

    },
    "env": {
      "browser": false,    // browser global variables.
      "node": true,        // Node.js global variables and Node.js-specific rules.
      "mocha": true,       // adds all of the Mocha testing global variables.
    },
    "plugins": [
      "import",
     ],
};