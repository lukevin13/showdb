import React from 'react';

const Footer = () => (
  <footer className="hero is-dark">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="buttons is-centered">
          <a className="button is-danger is-medium" href="https://reactjs.org/">React</a>
          <a className="button is-primary is-medium" href="https://bulma.io/">Bulma</a>
          <a className="button is-link is-medium" href="https://lukevin13.github.io/showdb">Github</a>
        </div>
        <p className="heading has-text-light">
          Movie and TV-Show information is retrieved from TMDB (The Movie Database) through their public API. Other than API access, this site has no affiliation with TMDB.
        </p>
      </div>
    </div>

  </footer>
);

export default Footer;
