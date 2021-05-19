import React, { PureComponent } from "react";
import "./styles.css";

import Header from './components/Header';
import Goods from './components/Goods';
import Cart from './components/Cart';
import store from './redux/store';
import { Provider } from "react-redux";
import { connect } from "react-redux"


class App extends PureComponent {

  render() {
    return (
      <Provider store={store}>
      <div className="app">
        <header className="app__header">
          <Header />
        </header>
        <main className="app__main">
          <div className="app__goods">
            <Goods />
          </div>
          <div className="app__cart">
            <Cart />
          </div>
        </main>
      </div>
      </Provider>
    );
  }
} 

export default App;
