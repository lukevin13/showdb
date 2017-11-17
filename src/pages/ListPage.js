import React from 'react';
import PropTypes from 'prop-types';
import HeroTitle from '../layouts/HeroTitle';
import TMDB from '../helpers/TMDB';

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };

    this.setResults = this.setResults.bind(this);
    this.getShowList = this.getShowList.bind(this);

    this.getShowList();
  }

  setResults(jsonResponse) {
    const { results } = jsonResponse;
    const validResults = results.filter(result => (result.backdrop_path && result.poster_path));

    this.setState({
      results: validResults,
    });
  }

  getShowList() {
    const { showType, listType, page } = this.props.match.params;
    TMDB.getShowlist(showType, listType, this.setResults);
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <HeroTitle match={match} />
      </div>
    );
  }
}

ListPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      showType: PropTypes.string,
      listType: PropTypes.string,
      page: PropTypes.string,
    }),
  }),
};

ListPage.defaultProps = {
  match: {
    params: {},
  },
};

export default ListPage;
