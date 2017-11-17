import React from 'react';
import PropTypes from 'prop-types';

const HeroTitle = ({ title, subtitle }) => (
  <div className="hero is-dark">
    <div className="hero-body">
      <div className="container">
        <div>
          <p className="title is-size-2">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  </div>
);

HeroTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

HeroTitle.defaultProps = {
  subtitle: '',
};

export default HeroTitle;
