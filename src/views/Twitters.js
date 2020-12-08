import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Twitters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedValue: '',
    };
  }

  componentDidMount() {
    const { fetchTwitters } = this.props;
    fetchTwitters();
  }

  changeSearchedValue = (newValue) => {
    this.setState({ searchedValue: newValue });
  };

  render() {
    const { twitters } = this.props;
    const { searchedValue } = this.state;

    return (
      <GridTemplate
        pageType="twitters"
        notesSize={twitters.length}
        handleChange={this.changeSearchedValue}
      >
        {twitters
          .filter(
            (note) =>
              note.title.toLowerCase().includes(searchedValue.toLowerCase()) ||
              note.content.toLowerCase().includes(searchedValue.toLocaleLowerCase()),
          )
          .map(({ title, content, twitterName, created, _id: id }) => (
            <Card
              id={id}
              title={title}
              content={content}
              twitterName={twitterName}
              created={created}
              key={id}
            />
          ))}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
  fetchTwitters: PropTypes.func.isRequired,
};

Twitters.defaultProps = {
  twitters: [],
};

// const mapStateToProps = ({ twitters }) => ({ twitters });

const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
