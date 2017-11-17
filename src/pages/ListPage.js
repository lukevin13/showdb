import React from 'react';
import PropTypes from 'prop-types';
import HeroTitle from '../layouts/HeroTitle';

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
  match: PropTypes.shape({}).isRequired,
};

export default ListPage;
