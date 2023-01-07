import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cryptolist from './Cryptolist';
import Search from './Search';

const Home = () => {
  const allCrypto = useSelector((state) => state.cryptoCurrency);
  const [query, setQuery] = useState('');
  const onSearch = (event) => {
    setQuery(event.target.value);
  };
  const navigate = useNavigate();
  const handleClick = (id) => {
    const filterCoin = allCrypto.filter((crypto) => crypto.id === id);
    navigate('/details', { state: filterCoin[0] });
  };
  return (
    <>
      <Search onSearch={onSearch} />
      <div data-testid="cryptoex" className="grid">
        {allCrypto.loading ? (<div className="animate" />) : (
          allCrypto.filter((exchange) =>
            // eslint-disable-next-line
            exchange.name.toLowerCase().includes(query)).map((coin) => (
              <Cryptolist coin={coin} handleClick={handleClick} key={coin.id} />
          )))}
      </div>
    </>
  );
};

export default Home;
