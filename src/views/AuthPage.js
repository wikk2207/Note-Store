import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { routes } from 'routes';
import AuthTemplate from 'templates/AuthTemplate';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { authenticate as authenticateAction } from 'actions';
import { useAlert } from 'react-alert';
import axios from 'axios';
import { apiPaths } from 'config/apiConfig';

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

const AuthPage = (props) => {
  const [authType, setAuthType] = useState('login');
  const { userID, authenticate } = props;
  const alert = useAlert();

  const setCurrentPage = () => {
    const authTypes = ['login', 'register'];
    const {
      location: { pathname },
    } = props;

    const [currentPage] = authTypes.filter((page) => pathname.includes(page));

    if (authType !== currentPage) {
      setAuthType(currentPage);
    }
  };

  useEffect(() => {
    setCurrentPage();
  });

  const handleRegister = (username, password, resetForm) => {
    axios
      .post(apiPaths.register, {
        username,
        password,
      })
      .then((response) => {
        if (response.status === 201) {
          alert.show('Successfully created new account. You can now sign in.', { type: 'success' });
          resetForm();
        }
      })
      .catch((err) => {
        alert.show('Something went wrong!', { type: 'error' });
      });
  };

  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }, { resetForm }) => {
          authType === 'login'
            ? authenticate(username, password)
            : handleRegister(username, password, () => resetForm());
        }}
      >
        {({ handleChange, handleBlur, values }) => {
          if (userID) {
            return <Redirect to={routes.home} />;
          }
          return (
            <>
              <Heading>{authType === 'login' ? 'Sign in' : 'Register'}</Heading>
              <StyledForm>
                <StyledInput
                  type="text"
                  name="username"
                  placeholder="Login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
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
          );
        }}
      </Formik>
    </AuthTemplate>
  );
};

AuthPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  authenticate: PropTypes.func.isRequired,
  userID: PropTypes.string,
};

AuthPage.defaultProps = {
  userID: null,
};

const mapStateToProps = ({ userID = null }) => ({ userID });

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
