import React from 'react';
import ReactDOM from 'react-dom';
import {AppProvider, Page} from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import App from './App'

ReactDOM.render(
  <AppProvider >
    <Page>
      <App />
    </Page>
  </AppProvider>,
  document.getElementById('root')
);
