/**
 * bootstrapper file in order to load any scripts or
 * css files that are impossible to load without
 * "ejecting" the "create-react-app" structure.
 */
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');

require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');

export default {};
