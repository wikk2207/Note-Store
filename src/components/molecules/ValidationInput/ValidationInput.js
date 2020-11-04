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

const ValidationInput = (props) => {
  const { errorMessage, ...inputProps } = props;
  return (
    <div>
      <Input {...inputProps} />
      <StyledParagraph>{errorMessage ? `*${errorMessage}` : ''}</StyledParagraph>
    </div>
  );
};

ValidationInput.propTypes = {
  errorMessage: PropTypes.string,
};

ValidationInput.defaultProps = {
  errorMessage: '',
};

export default ValidationInput;
