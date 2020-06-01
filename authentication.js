const testAuth = (z, bundle) => {
    return z
      .request({
        method: 'GET',
        url: bundle.authData.baseurl+'/_zapier/test',
        headers: {
            'x-token': bundle.authData.token
        }
      })
      .then(response => {
        if (response.status != 200) {
          throw new Error('The token you supplied is invalid');
        }
        return 'ok';
      });
  };
  
  module.exports = {
    type: 'custom',
    fields: [
      {
        key: 'token',
        type: 'string',
        required: true,
        helpText: 'The token you have created in the Zapier Config property of your nodes'
      },
      {
        key: 'baseurl',
        type: 'string',
        required: true,
        helpText: 'The web address where your nodered is running, (do not add a trailing slash) eg https://server.example.com.'
      }
    ],
    test: testAuth,
    connectionLabel: (z, bundle) => {
      return bundle.authData.baseurl;
    }
  };