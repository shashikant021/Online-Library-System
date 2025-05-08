import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { bookStore } from "./utils/bookStore";

function App() {
  return (
    <Provider store={bookStore}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default App;
