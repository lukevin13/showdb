import React from 'react';
import PropTypes from 'prop-types';
import TMDB from '../helpers/TMDB';
import './ShowBlock.css';

const ShowBlock = ({ show }) => (
  <div className="show-image">
    <figure className="image is-16by9">
      <img src={TMDB.tmdbImgHost + show.backdrop_path} alt={show.title || show.name} />
    </figure>
    <span className="tag show-score is-danger is-medium has-text-weight-semibold">
      {show.vote_average || 'N/A'}
    </span>
    <div className="show-bg" />
    <span className="show-title">
      <p className="title has-text-white is-size-4">
        {show.title || show.name}
      </p>
      <p className="subtitle has-text-grey-lighter is-size-6">
        {TMDB.getReleaseYear(show)}
      </p>
    </span>
  </div>
);

ShowBlock.propTypes = {
  show: PropTypes.shape({}),
};

ShowBlock.defaultProps = {
  show: {},
};

export default ShowBlock;
