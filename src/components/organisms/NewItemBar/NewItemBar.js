import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';

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
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const NewItemBar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <Heading>{`Create new ${pageContext}`}</Heading>
    <Paragraph>A note requires title and desription</Paragraph>
    <Input placeholder="title" />
    <StyledTextArea as="textarea" placeholder="desciption" />
    <Button>add note</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(NewItemBar);
