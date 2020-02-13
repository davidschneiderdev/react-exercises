import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { art } from './reducers';
import ArtSearch from './containers/ArtSearchContainer';

const store = createStore(art);
store.subscribe(() => {
    console.table(store.getState());
})


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <ArtSearch />
        </header>
      </div>
    </Provider>
  );
}

export default App;
