

const getTriggers = (z, bundle) => {
    return z
        .request({
            method: 'GET',
            url: bundle.authData.baseurl+'/_zapier/triggers',
            headers: {
                'x-token': bundle.authData.token
            }
        })
        .then (response => {
          const r = z.JSON.parse(response.content);
          return r.triggers; 
        });
}

module.exports = {
  key: 'trigger_node',
  noun: 'Triggers',
  display: {
    label: 'List of Triggers',
    description:
      'This is a hidden trigger, and is used in a Dynamic Dropdown within this app',
    hidden: true
  },
  operation: {
    perform: getTriggers,
  }
};

