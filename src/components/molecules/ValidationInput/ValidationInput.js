import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin-top: 2px;
  margin-left: 15px;
  color: red;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ValidationInput = (props) => {
  const { errorMessage, textarea, ...inputProps } = props;
  return (
    <StyledWrapper>
      <Input as={textarea ? 'textarea' : 'input'} {...inputProps} />
      <StyledParagraph>{errorMessage ? `*${errorMessage}` : ''}</StyledParagraph>
    </StyledWrapper>
  );
};

ValidationInput.propTypes = {
  errorMessage: PropTypes.string,
  textarea: PropTypes.bool,
};

ValidationInput.defaultProps = {
  errorMessage: '',
  textarea: false,
};

export default ValidationInput;
