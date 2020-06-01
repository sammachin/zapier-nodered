const nr_action = require('./creates/nr_action');
const nr_trigger = require('./triggers/nr_trigger');
const action_nodes = require('./triggers/action_nodes');
const trigger_nodes = require('./triggers/trigger_nodes');
const authentication = require('./authentication');

const App = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  beforeRequest: [],
  afterResponse: [],
  resources: {},
  triggers: {
    [action_nodes.key]: action_nodes, //hidden
    [trigger_nodes.key]: trigger_nodes, //hidden
    [nr_trigger.key]: nr_trigger 
  },
  searches: {},
  creates: {
    [nr_action.key]: nr_action  
  }
};

// Finally, export the app.
module.exports = App;
