import React, { useState } from 'react';
import { Provider } from 'react-redux';

import Counter from './components/Counter';

// import toolkitStore from "./store/redux-with-toolkit";
import store from './store/simple-redux';


function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
