import React, { PureComponent } from "react";
import "../styles.css";
import { deleteGoodFromCart  } from "../redux/action";
import { connect } from 'react-redux';

class CartItem extends PureComponent {
  render() {
    const { title, price, id } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button className="del-button" onClick={() => this.props.deleteGoodFromCart(id)}>Удалить</button>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  deleteGoodFromCart : (id) => dispatch(deleteGoodFromCart (id))
});

export default connect(() => {}, mapDispatchToProps)(CartItem);
