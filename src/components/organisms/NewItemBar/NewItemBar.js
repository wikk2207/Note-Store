import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';
import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  z-index: 9999;
  padding: 100px 90px;
  border-left: 10px solid ${({ activeColor, theme }) => theme[activeColor]};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 25px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading>{`Create new ${pageContext}`}</Heading>
    <Paragraph>A note requires title and desription</Paragraph>
    <StyledInput placeholder="Title" />
    {pageContext === 'articles' && <StyledInput placeholder="link" />}
    {pageContext === 'twitters' && <StyledInput placeholder="Account Name eg. hello_roman" />}

    <StyledTextArea as="textarea" placeholder="desciption" />
    <Button
      onClick={() =>
        addItem(pageContext, {
          title: 'You gave React a bad name',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
        })}
    >
      add note
    </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
