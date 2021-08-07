import Index from "./pages/index.jsx";
import Trending from "./pages/trending";
import { Switch, Route } from "react-router-dom";
const routeList = [
  {
    path: "/trending",
    component: <Trending />,
  },
  {
    path: "/",
    exact: true,
    component: <Index />,
  },
];
const Routes = () => {
  return (
    <Switch>
      {routeList.map(({ component, ...rest }) => (
        <Route {...rest}>{component}</Route>
      ))}
    </Switch>
  );
};

export default Routes;
