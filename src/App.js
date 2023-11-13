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
        <div className='toasty'>
          <ToastContainer
            theme="dark"
            position="top-right"
            // hideProgressBar
            // newestOnTop
            // rtl
            autoClose={3000}
            closeOnClick
            pauseOnFocusLoss={false}

          />
        </div>

        <Layout />
      </Provider>
    </>
  );
}

export default App;
