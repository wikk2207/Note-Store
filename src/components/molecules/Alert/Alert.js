import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import infoIcon from 'assets/icons/info.svg';
import errorIcon from 'assets/icons/error.svg';
import successIcon from 'assets/icons/success.svg';

const alertIcon = {
  success: successIcon,
  info: infoIcon,
  error: errorIcon,
};

const StyledWrapper = styled.div`
  background-color: ${({ type, theme }) => theme.alert[type]};
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  box-shadow: 0 10px 20px -10px hsla(0, 0%, 0%, 0.1);
  background-image: url(${(type) => alertIcon[type]});
  background-size: 15px;
  background-position: 15px 50%;
  background-repeat: no-repeat;
`;

const StyledParagraph = styled(Paragraph)`
  margin-left: 20px;
  justify-self: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: white;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  margin-right: 15px;
  color: white;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledImg = styled.img`
  margin-left: 15px;
  width: 30px;
`;

const Alert = ({ style, options: { type }, message, close }) => (
  <StyledWrapper type={type} style={style}>
    <StyledImg alt="" src={alertIcon[type]} />
    <StyledParagraph>{message}</StyledParagraph>

    <StyledButton type="button" onClick={close}>
      X
    </StyledButton>
  </StyledWrapper>
);

Alert.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
  message: PropTypes.string,
  close: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object.isRequired,
};

Alert.defaultProps = {
  message: '',
};

export default Alert;
