import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { apiPaths } from 'config/apiConfig';

class DetailsPage extends Component {
  constructor() {
    super();

    this.state = {
      activeItem: {
        title: '',
        content: '',
        articleUrl: '',
        twitterName: '',
        created: '',
      },
    };
  }

  componentDidMount() {
    const { activeItem: activeItemTable } = this.props;
    if (activeItemTable) {
      const [activeItem] = activeItemTable;
      this.setState({ activeItem });
    } else {
      const {
        match: {
          params: { id },
        },
      } = this.props;
      axios
        .get(`${apiPaths.getSingleNote}/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { activeItem: item } = this.state;

    return (
      <DetailsTemplate
        title={item.title}
        created={item.created}
        content={item.content}
        articleUrl={item.articleUrl}
        twitterName={item.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  activeItem: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string,
      twitterName: PropTypes.string,
    }),
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

DetailsPage.defaultProps = {
  activeItem: null,
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        (item) => item._id === ownProps.match.params.id,
      ),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
