import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navMenuActive: false,
    };
    this.toggleNavMenu = this.toggleNavMenu.bind(this);
    this.clearNavMenu = this.clearNavMenu.bind(this);
  }

  toggleNavMenu() {
    this.setState({
      navMenuActive: !this.state.navMenuActive,
    });
  }

  clearNavMenu() {
    this.setState({
      navMenuActive: false,
    });
  }

  render() {
    const { navMenuActive } = this.state;

    return (
      <header>

        <nav className="navbar is-danger is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/showdb">ShowDb</Link>
              <div className="navbar-burger" onClick={this.toggleNavMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div
              className={`navbar-menu ${navMenuActive && 'is-active'}`}
              onClick={this.clearNavMenu}
            >
              <div className="navbar-end">
                <Link className="navbar-item" to="/showdb/search">Search</Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Movies</a>
                  <div className="navbar-dropdown">
                    <Link className="navbar-item" to="/showdb/list/movie/popular/1">Popular</Link>
                    <Link className="navbar-item" to="/showdb/list/movie/top_rated/1">Top Rated</Link>
                    <Link className="navbar-item" to="/showdb/list/movie/now_playing/1">Now Playing</Link>
                    <Link className="navbar-item" to="/showdb/list/movie/upcoming/1">Upcoming</Link>
                  </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">TV Shows</a>
                  <div className="navbar-dropdown">
                    <Link className="navbar-item" to="/showdb/list/tv/popular/1">Popular</Link>
                    <Link className="navbar-item" to="/showdb/list/tv/top_rated/1">Top Rated</Link>
                    <Link className="navbar-item" to="/showdb/list/tv/on_the_air/1">On the Air</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
