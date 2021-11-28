import { Route, Switch } from "react-router";
import Footer from "./component/Footer";
import Header from "./component/Header";
import PrivateRoute from "./component/PrivateRoute";
import AddResort from "./pages/AddResort";
import Bookings from "./pages/Bookings";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ManageBooking from "./pages/ManageBooking";
import Order from "./pages/Order";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute path="/manage" exact>
          <ManageBooking />
        </PrivateRoute>
        <PrivateRoute path="/checkout" exact>
          <Order />
        </PrivateRoute>
        <PrivateRoute path="/bookings" exact>
          <Bookings />
        </PrivateRoute>
        <PrivateRoute path="/add-resort" exact>
          <AddResort />
        </PrivateRoute>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
