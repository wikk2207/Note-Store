import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { routes } from 'routes';
import AuthTemplate from 'templates/AuthTemplate';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { authenticate as authenticateAction } from 'actions';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authType: 'login',
    };
  }

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const authTypes = ['login', 'register'];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = authTypes.filter((page) => pathname.includes(page));

    if (prevState.authType !== currentPage) {
      this.setState({ authType: currentPage });
    }
  };

  render() {
    const { authType } = this.state;
    const { authenticate } = this.props;

    return (
      <AuthTemplate>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={({ username, password }) => {
            authenticate(username, password);
          }}
        >
          {({ handleChange, handleBlur, values }) => (
            <>
              <Heading>{authType === 'login' ? 'Sign in' : 'Register'}</Heading>
              <StyledForm>
                <StyledInput
                  type="text"
                  name="username"
                  placeholder="Login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <Button activecolor="notes" type="submit">
                  {authType === 'login' ? 'sign in' : 'register'}
                </Button>
              </StyledForm>
              {authType === 'login' ? (
                <StyledLink to={routes.register}>I want my account!</StyledLink>
              ) : (
                <StyledLink to={routes.login}>I want to log in!</StyledLink>
              )}
            </>
          )}
        </Formik>
      </AuthTemplate>
    );
  }
}

AuthPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  authenticate: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(null, mapDispatchToProps)(AuthPage);
