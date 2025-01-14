import React, { PureComponent } from "react";
import "../styles.css";
import store from '../redux/store';
import { connect } from 'react-redux';
import CartItem from './CartItem';

class Cart extends PureComponent {
  // state = {
  //   cartGoods: []
  // }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     const globalState = store.getState();
  //     this.setState({ cartGoods: globalState.card})
  //   })
  // }

  getTotal() {
    // const { cartGoods } = this.state;

    return this.props.cartGoods.reduce((acc, item) => acc + item.price, 0);
  }
  render() {
    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        { this.props.cartGoods.length ?
          <ul className="cart__list">
            {this.props.cartGoods.map((item, index) => (
              <li className="cart__list-item" key={index}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        :
          <p className="cart__note">Nothing in the cart now</p>
        }

        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartGoods: state.cartGoods
  }
};


export default connect(mapStateToProps, '')(Cart);


