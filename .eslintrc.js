module.exports = {
    "extends": "airbnb-base",
     'rules': {
      'no-underscore-dangle': 'off',
      "no-console": 0, // disallow use of console (off by default in the node environment)
      "space-in-parens": 0,
    },
    "env": {
      "browser": false,     // browser global variables.
      "node": true,        // Node.js global variables and Node.js-specific rules.
      "mocha": true,       // adds all of the Mocha testing global variables.
    },
    "plugins": [
      "import",
       // e.g. "react" (must run `npm install eslint-plugin-react` first)
     ],
};