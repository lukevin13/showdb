import React from 'react';
import PropTypes from 'prop-types';
import TMDB from '../helpers/TMDB';
import './ShowDetails.css';

const ShowDetails = ({ show, clearModal }) => (
  <div className="modal is-active">
    <div className="modal-background" onClick={clearModal}/>
    <div className="container">
      <div className="modal-content custom-content">
        <div className="columns is-gapless">
          <div className="column is-4">
            <figure className="image">
              <img src={TMDB.tmdbImgHost + show.poster_path} alt={show.title || show.name} />
            </figure>
          </div>
          <div className="column is-8">
            <p className="title">{show.title || show.name}</p>


          </div>
        </div>
      </div>
      <div className="modal-close is-large" onClick={clearModal} />
    </div>
  </div>
);

ShowDetails.propTypes = {
  show: PropTypes.shape({}).isRequired,
  clearModal: PropTypes.func.isRequired,
};

export default ShowDetails;
