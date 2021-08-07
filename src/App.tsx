import "./index.css";
import { store } from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;