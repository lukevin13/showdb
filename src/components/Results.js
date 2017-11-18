import React from 'react';
import PropTypes from 'prop-types';
import ShowBlock from '../components/ShowBlock';
import ShowDetails from '../components/ShowDetails';
import TMDB from '../helpers/TMDB';
import './Results.css';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      modalShow: {},
      modalCredits: {},
    };

    this.setModalShow = this.setModalShow.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearModal = this.clearModal.bind(this);
    this.setModalCredits = this.setModalCredits.bind(this);
  }

  setModalShow(show) {
    console.log(show);
    this.setState({
      modalShow: show,
    });
    TMDB.getCredits(this.props.showType, show.id, this.setModalCredits);
  }

  setModalCredits(credits) {
    console.log(credits);
    this.setState({
      modalCredits: credits,
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
        <section className="section custom-section-mobile">
          <div className="container">
            <ul className="columns is-multiline">
              {results.map(result => (
                <li className="column is-4 custom-column-mobile" key={result.id}>
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
          ? <ShowDetails
            show={this.state.modalShow}
            credits={this.state.modalCredits}
            clearModal={this.clearModal}
          />
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
