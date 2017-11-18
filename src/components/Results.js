import React from 'react';
import PropTypes from 'prop-types';
import ShowBlock from '../components/ShowBlock';
import ShowDetails from '../components/ShowDetails';
import TMDB from '../helpers/TMDB';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      modalShow: {},
    };

    this.setModalShow = this.setModalShow.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearModal = this.clearModal.bind(this);
  }

  setModalShow(show) {
    this.setState({
      modalShow: show,
      modalActive: true,
    });
  }

  handleClick(showID) {
    TMDB.getDetails(this.props.showType, showID, this.setModalShow);
  }

  clearModal() {
    this.setState({
      modalActive: false,
    });
  }

  render() {
    const { results } = this.props;

    return (
      <div>
        <section className="section">
          <div className="container">
            <ul className="columns is-multiline">
              {results.map(result => (
                <li className="column is-4" key={result.id}>
                  <a onClick={() => {this.handleClick(result.id)}}>
                    <ShowBlock show={result} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {
          (this.state.modalActive)
          ? <ShowDetails show={this.state.modalShow} clearModal={this.clearModal} />
          : null
        }
      </div>
    );
  }
}

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  showType: PropTypes.string.isRequired,
};

Results.defaultProps = {
  results: [{}],
};

export default Results;
