import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedValue: '',
    };
  }

  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  changeSearchedValue = (newValue) => {
    this.setState({ searchedValue: newValue });
  };

  render() {
    const { notes } = this.props;
    const { searchedValue } = this.state;

    return (
      <GridTemplate
        pageType="notes"
        notesSize={notes.length}
        handleChange={this.changeSearchedValue}
      >
        {notes
          .filter(
            (note) =>
              note.title.toLowerCase().includes(searchedValue.toLowerCase()) ||
              note.content.toLowerCase().includes(searchedValue.toLocaleLowerCase()),
          )
          .map(({ title, content, created, _id: id }) => (
            <Card id={id} title={title} content={content} created={created} key={id} />
          ))}
      </GridTemplate>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
  fetchNotes: PropTypes.func.isRequired,
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
