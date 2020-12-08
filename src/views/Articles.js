import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedValue: '',
    };
  }

  componentDidMount = () => {
    const { fetchArticles } = this.props;
    fetchArticles();
  };

  changeSearchedValue = (newValue) => {
    this.setState({ searchedValue: newValue });
  };

  render() {
    const { articles } = this.props;
    const { searchedValue } = this.state;
    return (
      <GridTemplate
        pageType="articles"
        notesSize={articles.length}
        handleChange={this.changeSearchedValue}
      >
        {articles
          .filter(
            (note) =>
              note.title.toLowerCase().includes(searchedValue.toLowerCase()) ||
              note.content.toLowerCase().includes(searchedValue.toLocaleLowerCase()),
          )
          .map(({ title, content, articleUrl, created, _id: id }) => (
            <Card
              id={id}
              title={title}
              content={content}
              articleUrl={articleUrl}
              created={created}
              key={id}
            />
          ))}
      </GridTemplate>
    );
  }
}
Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
  fetchArticles: PropTypes.func.isRequired,
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
