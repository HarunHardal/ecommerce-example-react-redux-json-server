import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "../root/Dashboard";
import {Route,Switch} from 'react-router-dom';
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotField from "../common/NotField";

function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Switch>
          <Route path="/" exact component={DashBoard}></Route>
          <Route path="/product" exact component={DashBoard}></Route>
          <Route path="/cart" exact component={CartDetail}></Route>
          <Route path="/saveproduct/:productId" exact component={AddOrUpdateProduct}></Route>
          <Route path="/saveproduct/" exact component={AddOrUpdateProduct}></Route>
          <Route  component={NotField}></Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
