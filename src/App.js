import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCrypto } from './redux/crypto/crypto';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Details from './component/Details';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCrypto());
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Details />} path="/details" />
        </Routes>
      </div>
    </>
  );
}

export default App;
