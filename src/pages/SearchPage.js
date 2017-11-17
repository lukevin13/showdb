import React from 'react';
import HeroTitle from '../layouts/HeroTitle';
import Results from '../components/Results';
import TMDB from '../helpers/TMDB';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      showType: 'movie',
      query: '',
    };

    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.handleSelectOnChange = this.handleSelectOnChange.bind(this);
    this.setResults = this.setResults.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setResults(jsonResponse) {
    const { results } = jsonResponse;
    const validResults = results.filter(result => (result.backdrop_path && result.poster_path));

    this.setState({
      results: validResults,
    });
  }

  handleSelectOnChange(e) {
    this.setState({
      showType: e.target.value,
    });
  }

  handleInputOnChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    TMDB.getSearchResults(this.state.showType, this.state.query, this.setResults);
  }

  render() {
    const { showType, query, results } = this.state;
    return (
      <div>
        <HeroTitle title="Search" subtitle="Get Show Details" />
        <section className="section">
          <div className="container">
            <form className="field has-addons" onSubmit={this.handleSubmit}>
              <div className="control">
                <div className="select">
                  <select value={showType} onChange={this.handleSelectOnChange}>
                    <option value="movie">Movie</option>
                    <option value="tv">TV Show</option>
                  </select>
                </div>
              </div>
              <div className="control is-expanded">
                <input
                  className="input"
                  value={query}
                  type="text"
                  onChange={this.handleInputOnChange}
                />
              </div>
              <div className="control">
                <button className="button">Search</button>
              </div>
            </form>
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  }
}

export default SearchPage;
