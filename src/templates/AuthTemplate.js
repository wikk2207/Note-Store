import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import logoIcon from 'assets/icons/logo.png';
import { withRouter } from 'react-router';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.notes};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.img`
  width: 200px;
  height: auto;
`;

const StyledAuthCard = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo src={logoIcon} alt="" />
    <Heading big as="h1">
      Your new favourite online notes experience
    </Heading>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(AuthTemplate);
