import React from 'react';
import PropTypes from 'prop-types';
import ShowBlock from '../components/ShowBlock';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      modalShow: {},
    };
  }

  clearModal() {
    this.setState({
      modalActive: false,
    });
  }

  render() {
    const { results } = this.props;

    return (
      <section className="section">
        <div className="container">
          <ul className="columns is-multiline">
            {results.map(result => (
              <li className="column is-4" key={result.id}>
                <ShowBlock show={result} />
              </li>
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
