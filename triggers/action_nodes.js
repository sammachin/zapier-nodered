

const getActions = (z, bundle) => {
    return z
        .request({
            method: 'GET',
            url: bundle.authData.baseurl+'/_zapier/actions',
            headers: {
                'x-token': bundle.authData.token
            }
        })
        .then (response => {
          const r = z.JSON.parse(response.content);
          return r.actions; 
        });
}

module.exports = {
  key: 'action_node',
  noun: 'Actions',
  display: {
    label: 'List of Actions',
    description:
      'This is a hidden trigger, and is used in a Dynamic Dropdown within this app',
    hidden: true
  },
  operation: {
    perform: getActions,
  }
};

