import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import Store from './components/Redux/Store';


import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQLCMS_URI,
  cache: new InMemoryCache(),
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ApolloProvider client={client}>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);