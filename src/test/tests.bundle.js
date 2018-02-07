var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
var context = require.context('.', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
Enzyme.configure({ adapter: new Adapter() });
module.exports = context;
