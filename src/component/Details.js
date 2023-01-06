import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const {
    // eslint-disable-next-line
    name, image, description, country,
    // eslint-disable-next-line
    trust_score_rank, trade_volume_24h_btc,
  } = location.state;
  return (
    <div>
      <button type="button">
        <Link className="back" to="/">
          &larr;
          <span className="site-data">back</span>
        </Link>
      </button>
      <div className="detail-header">
        <img className="details-img" src={image} alt={name} />
        <div className="detail-data">
          <p className="site-data">
            Coin:
            {
              name ? (
                <span>{name}</span>
              ) : ''
            }
          </p>
          <p className="site-data">
            Ranked at: #
            {/* eslint-disable-next-line */}
            {trust_score_rank}
          </p>
        </div>
      </div>
      <h1 className="color">{name}</h1>
      <div className="box">
        <div>
          <div className="description">
            <p className="desc-color">
              {
                country ? (
                  <p className="desc-color">
                    country origin:
                    <span>{country}</span>
                  </p>
                ) : ''
              }
            </p>
          </div>
          <p className="desc-color">{description}</p>
          <div className="description">
            <p className="desc-color">Ranked at </p>
            {/* eslint-disable-next-line */}
            <p className="desc-color">#{trust_score_rank}</p>
          </div>
          <div className="description">
            <span className="desc-color">Trade volume 24h btc</span>
            {/* eslint-disable-next-line */}
            <p className="volume-color">{trade_volume_24h_btc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
