import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navMenuActive: false,
    };
    this.toggleNavMenu = this.toggleNavMenu.bind(this);
  }

  toggleNavMenu() {
    this.setState({
      navMenuActive: !this.state.navMenuActive,
    });
  }

  render() {
    const { navMenuActive } = this.state;

    return (
      <header>

        <nav className="navbar is-danger">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">ShowDb</Link>
              <div className="navbar-burger" onClick={this.toggleNavMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={`navbar-menu ${navMenuActive && 'is-active'}`}>
              <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                  <p className="navbar-link">Movies</p>
                  <div className="navbar-dropdown">
                    <Link className="navbar-item" to="/list/movie/popular/1">Popular</Link>
                    <Link className="navbar-item" to="/list/movie/top_rated/1">Top Rated</Link>
                    <Link className="navbar-item" to="/list/movie/now_playing/1">Now Playing</Link>
                  </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <p className="navbar-link">TV Shows</p>
                  <div className="navbar-dropdown">
                    <Link className="navbar-item" to="/list/tv/popular/1">Popular</Link>
                    <Link className="navbar-item" to="/list/tv/top_rated/1">Top Rated</Link>
                    <Link className="navbar-item" to="/list/tv/on_the_air/1">On the Air</Link>
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
