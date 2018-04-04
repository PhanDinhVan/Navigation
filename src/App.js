import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Button_Wrap from './conteners/Button_Wrap/Button_Wrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Button_Wrap />
        </Layout>
      </div>
    );
  }
}

export default App;
