import React, { PureComponent } from "react";
import "../styles.css";

import GoodsItem from './GoodsItem';
import store from '../redux/store';
import { connect } from 'react-redux';
import mapDispatchToProps from './GoodsItem'
class Goods extends PureComponent {
  // state = {
  //   goods: []
  // }

  // componentDidMount() {
  //   const gState = store.getState();
  //   this.setState({ goods: gState.goods })
  // }

  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.props.goods.map(item => (
          <ul className="goods__list" key={item.id}>
            <li className="goods__list-item">
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
      goods: state.goods
  }
};


export default connect(mapStateToProps, '')(Goods);