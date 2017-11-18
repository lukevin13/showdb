import React from 'react';
import PropTypes from 'prop-types';
import HeroTitle from '../layouts/HeroTitle';
import Results from '../components/Results';
import TMDB from '../helpers/TMDB';

const matchMap = {
  movie: 'Movies',
  tv: 'TV Shows',
  popular: 'Popular',
  top_rated: 'Top Rated',
  now_playing: 'Now Playing',
  on_the_air: 'On the Air',
  upcoming: 'Upcoming',
};

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };

    this.setResults = this.setResults.bind(this);
    this.getShowList = this.getShowList.bind(this);

    const { showType, listType, page } = this.props.match.params;
    this.getShowList(showType, listType, page);
  }

  componentWillReceiveProps(nextProps) {
    const { showType, listType, page } = this.props.match.params;
    const {
      showType: nextShowType,
      listType: nextListType,
      page: nextPage,
    } = nextProps.match.params;

    if (showType !== nextShowType || listType !== nextListType) {
      this.getShowList(nextShowType, nextListType, nextPage);
    }
  }

  setResults(jsonResponse) {
    const { results } = jsonResponse;
    const validResults = results.filter(result => (result.backdrop_path && result.poster_path));

    this.setState({
      results: validResults,
    });
  }

  getShowList(showType, listType, page) {
    TMDB.getShowlist(showType, listType, this.setResults);
  }

  render() {
    const { showType, listType } = this.props.match.params;

    return (
      <div>
        <HeroTitle
          title={matchMap[showType]}
          subtitle={matchMap[listType]}
        />
        <Results results={this.state.results} showType={showType} />
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
