import React, { Component } from "react";
import { connect } from "react-redux";
import * as cartActions from '../../redux/actions/cartActions'
import {
    Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { bindActionCreators } from "redux";
import {Link} from 'react-router-dom'
import alertify from "alertifyjs";


class CartSummary extends Component {

  removeFromCart=(product)=>{
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName+ ' has been deleted')
}

  renderEmpty() {
    return (
      <NavItem>
        <NavLink>CART</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      <UncontrolledDropdown>
        <DropdownToggle nav caret>
          Cart
        </DropdownToggle>
        <DropdownMenu>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>X</Badge>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem><Link to={'/cart'}>Go To Cart</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return{
    actions:{
      removeFromCart: bindActionCreators(cartActions.removeFromCart,dispatch)
    }
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
