import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router, browserHistory } from 'react-router'

import routes from './routes'


const client = new ApolloClient({
  dataIdFromObject: o => o.id 
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={browserHistory} routes={routes} />
    </ApolloProvider>  
  )
  
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
