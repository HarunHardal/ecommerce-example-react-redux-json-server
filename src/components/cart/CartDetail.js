
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from '../../redux/actions/cartActions'
import alertify from "alertifyjs";

class CartDetail extends Component {
  removeFromCart=(product)=>{
      this.props.actions.removeFromCart(product);
      alertify.error(product.productName+ ' has been deleted')
  }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th>{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <th>
<Button  color="danger" onClick={()=> this.removeFromCart(cartItem.product)}>Delete In Cart</Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
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
  export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);
