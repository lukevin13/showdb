import React from 'react';
import PropTypes from 'prop-types';

const matchMap = {
  movie: 'Movies',
  tv: 'TV Shows',
  popular: 'Popular',
  top_rated: 'Top Rated',
  now_playing: 'Now Playing',
  on_the_air: 'On the Air',
};

const HeroTitle = ({ match }) => (
  <div className="hero is-dark">
    <div className="hero-body">
      <div className="container">
        <div>
          <p className="title is-size-2">{matchMap[match.params.showType]}</p>
          <p className="subtitle">{matchMap[match.params.listType]}</p>
        </div>
      </div>
    </div>
  </div>
);

HeroTitle.propTypes = {
  match: PropTypes.shape({}),
};

HeroTitle.defaultProps = {
  match: {},
};

export default HeroTitle;
