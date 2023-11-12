import Layout from './Conponents/Layout/Layout';
import './App.css';
import Store from '././Config/ReduxStore/Store'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Provider store={Store} >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          // pauseOnFocusLoss
          theme="dark"
        />
        {/* Same as */}
        <ToastContainer />
        <Layout />
      </Provider>
    </>
  );
}

export default App;
