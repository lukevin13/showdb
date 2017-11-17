import React from 'react';
import PropTypes from 'prop-types';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { results } = this.props;

    return (
      <section className="section">
        <div className="container">
          <ul>
            {results.map(result => (
              <li key={result.id}>{result.title || result.name} - {result.vote_average || 'N/A'}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
};

Results.defaultProps = {
  results: [{}],
};

export default Results;
