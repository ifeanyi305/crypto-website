import PropTypes from 'prop-types';
import React from 'react';

const Cryptolist = ({ coin, handleClick }) => {
  // eslint-disable-next-line
  const { name, image, trust_score_rank, url, id } = coin;
  return (
  // eslint-disable-next-line
    <div className="flex" onClick={() => handleClick(id)}>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <p className="center">
          Ranked at #
          {/* eslint-disable-next-line */}
          {trust_score_rank}
        </p>
        <h1 className="center break">{name}</h1>
        <a href={url} className="url">{name}</a>
      </div>
      <div>
        <button type="button" onClick={() => handleClick(id)}>&rarr;</button>
      </div>
    </div>
  );
};

Cryptolist.propTypes = {
  // eslint-disable-next-line
  coin: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    image: PropTypes.string,
    trust_score_rank: PropTypes.number,
  }),
  // eslint-disable-next-line
  handleClick: PropTypes.func,
};

export default Cryptolist;
