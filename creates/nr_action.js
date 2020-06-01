module.exports = {
  key: 'nr_action',
  noun: 'NodeRED Action',
  display: {
    label: 'NodeRED Action',
    description: 'Sends data to a NodeRED Action.'
  }, 

  operation: {
    inputFields: [
      { key: 'node_id', required: true, dynamic: 'action_node.id'},
      { key: 'payload', required: true, type: 'string' },
      { key: 'topic', required: false, type: 'string' },
    ],
    perform: (z, bundle) => {
      const promise = z.request({
        url:  bundle.authData.baseurl+'/_zapier/actions/'+ bundle.inputData.node_id,
        method: 'POST',
        body: {
          payload : bundle.inputData.payload,
          topic : bundle.inputData.topic
        },
        headers: {
          'x-token': bundle.authData.token
        }
      });
      return promise.then(response => response.json);
    },
    sample: {
      payload: 'example',
    },
    outputFields: [
      { key: 'payload', label: 'payload' },
      { key: 'topic', label: 'topic' }
    ]
  }
}
  
