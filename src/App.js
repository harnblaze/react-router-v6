import {Navigate, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import UsersListLayout from "./components/UsersListLayout";

function App() {
  return (
    <>
      <h1>APp</h1>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/users/" component={UsersListLayout}></Route>
        <Navigate from="*" to="/" />
      </Switch>
    </>
  );
}

export default App;
