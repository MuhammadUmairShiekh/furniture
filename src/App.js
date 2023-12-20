import Layout from "./Conponents/Layout/Layout";
import "./App.css";
// import store from "./Config/ReduxStore/Store";
import store from './Config/ReduxStore/index'
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "../src/Config/router";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="toasty">
          <ToastContainer
            style={{ fontSize: "14px", zIndex: "1" }}
            theme="dark"
            position="top-right"
            // hideProgressBar
            // newestOnTop
            // rtl={true}
            autoClose={3000}
            closeOnClick
            pauseOnFocusLoss={true}
          />
        </div>

        <Router />
      </Provider>
    </>
  );
}

export default App;
