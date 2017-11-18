import React from 'react';
import PropTypes from 'prop-types';
import TMDB from '../helpers/TMDB';
import './ShowDetails.css';

const ShowDetails = ({ show, credits, clearModal }) => (
  <div className="modal is-active custom-modal">
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
            <div className="box custom-box is-radiusless">
              <p className="title">{show.title || show.name}</p>

              <div className="columns is-mobile is-multiline">
                <div className="column is-one-third-desktop is-one-third-tablet is-half-mobile">
                  <p className="heading">Release Year</p>
                  <p className="subtitle">{TMDB.getReleaseYear(show)}</p>
                </div>
                <div className="column is-one-third-desktop is-one-third-tablet is-half-mobile">
                  <p className="heading">{(show.runtime) ? 'Movie Runtime' : 'Episode Runtime'}</p>
                  <p className="subtitle">
                    {(show.runtime || show.episode_run_time)
                      ? `${show.runtime || show.episode_run_time} min`
                      : 'N/A'}
                  </p>
                </div>
                <div className="column is-one-third-desktop is-one-third-tablet is-half-mobile">
                  <p className="heading">TMDB Score</p>
                  <p className="subtitle">{show.vote_average || 'N/A'}</p>
                </div>
              </div>

              <p className="heading">Genres</p>
              <div className="tags">
                {
                  (show.genres.length > 0)
                  ? (show.genres.map(genre => (
                    <span className="tag is-danger is-medium" key={genre.id}>
                      {genre.name}
                    </span>
                  )))
                  : <span className="tag is-danger is-medium">N/A</span>
                }
              </div>

              <p className="heading">Overview</p>
              <p className="subtitle is-size-6">{show.overview || 'N/A'}</p>

              <p className="heading">Main Cast</p>
              <div className="tags">
                {
                  (credits.cast.length > 0)
                  ? (credits.cast.slice(0, 13).map(player => (
                    <span className="tag is-dark is-medium" key={player.id}>
                      {player.name}
                    </span>
                  )))
                  : <span className="tag is-dark is-medium">N/A</span>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" onClick={clearModal} />
    </div>
  </div>
);

ShowDetails.propTypes = {
  show: PropTypes.shape({}).isRequired,
  clearModal: PropTypes.func.isRequired,
  credits: PropTypes.shape({}).isRequired,
};

export default ShowDetails;
