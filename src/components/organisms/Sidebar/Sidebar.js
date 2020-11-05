import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.png';
import { routes } from 'routes';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { logout as logoutAction } from 'actions';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activecolor, theme }) => (activecolor ? theme[activecolor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 120px;
  height: 70px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = ({ pageContext, logout }) => {
  return (
    <StyledWrapper activecolor={pageContext}>
      <StyledLogoLink to={routes.home} />
      <StyledLinksList>
        <li>
          <ButtonIcon as={NavLink} to={routes.notes} icon={penIcon} activeclass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to={routes.twitters} icon={twitterIcon} activeclass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to={routes.articles} icon={bulbIcon} activeclass="active" />
        </li>
      </StyledLinksList>
      <StyledLogoutButton
        as={NavLink}
        to={routes.login}
        onClick={() => logout()}
        icon={logoutIcon}
      />
    </StyledWrapper>
  );
};

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  logout: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(null, mapDispatchToProps)(withContext(Sidebar));
