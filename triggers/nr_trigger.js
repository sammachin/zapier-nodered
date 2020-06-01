const nr_trigger = (z, bundle) => {
    const data = {
        id: bundle.cleanedRequest.id,
        payload: bundle.cleanedRequest.payload,
        topic: bundle.cleanedRequest.topic
      };
    
    return [data];
};

const setupWebhook = (z, bundle) => {
    const options = {
        url: bundle.authData.baseurl+'/_zapier/triggers/'+bundle.inputData.node_id,
        method: "POST",
        body: {
            'webhook': bundle.targetUrl
        },
        headers: {
            'x-token': bundle.authData.token
        }
      };
      return z.request(options)
        .then((response => z.JSON.parse(response.content)));
};

const clearWebhook = (z, bundle) => {
  const options = {
    url: bundle.authData.baseurl+'/_zapier/triggers/'+bundle.inputData.node_id,
    method: "DELETE",
    headers: {
        'x-token': bundle.authData.token
    }
  };
  return z.request(options)
    .then((response => z.JSON.parse(response.content)));
}; 



const getSample = (z, bundle) => {
  const options = {
    url: bundle.authData.baseurl+'/_zapier/triggers/'+bundle.inputData.node_id, 
    method: "GET",
    headers: {
        'x-token': bundle.authData.token
    }
  }
  return z.request(options)
  .then((response => z.JSON.parse(response.content)));
};



module.exports = {
  key: 'nr_trigger',
  noun: 'Node-RED Trigger',
  display: {
    label: 'Node-RED Trigger',
    description: 'Triggers when a new payload is received from Node-RED'
  },
  operation: {
    inputFields: [{ key: 'node_id', required: true, dynamic: 'trigger_node.id'}],
    type: 'hook',
    performSubscribe: setupWebhook,
    performUnsubscribe: clearWebhook,
    perform: nr_trigger,
    performList: getSample,
    sample: {
      "payload": "Hello World",
      "id" : "44dc7a78.891854",
      "topic" : "Testing"
    }
  }
}