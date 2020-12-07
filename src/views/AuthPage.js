import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { useAlert } from 'react-alert';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { apiPaths } from 'config/apiConfig';
import AuthTemplate from 'templates/AuthTemplate';
import Button from 'components/atoms/Button/Button';
import { validations } from 'utils/text/validations';
import { apiResponses } from 'utils/text/apiResponses';
import Heading from 'components/atoms/Heading/Heading';
import { authenticate as authenticateAction } from 'actions';
import ValidationInput from 'components/molecules/ValidationInput/ValidationInput';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(ValidationInput)`
  width: 300px;
  height: 40px;
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
  const formikRef = useRef();

  const setCurrentPage = () => {
    const authTypes = ['login', 'register'];
    const {
      location: { pathname },
    } = props;

    const [currentPage] = authTypes.filter((page) => pathname.includes(page));

    if (authType !== currentPage) {
      formikRef.current.resetForm();
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
          alert.show(apiResponses.registerSuccess, { type: 'success' });
          resetForm();
        }
      })
      .catch((err) => {
        if (err.response.status === 409) {
          alert.show(apiResponses.userConflict, { type: 'error' });
        } else {
          console.log(err);
          alert.show(apiResponses.serverError, { type: 'error' });
        }
      });
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(5, validations.min5Characters)
      .max(20, validations.max20Characters)
      .required(validations.required),
    password: Yup.string()
      .min(5, validations.min5Characters)
      .max(20, validations.max20Characters)
      .required(validations.required),
  });

  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={({ username, password }, { resetForm }) => {
          authType === 'login'
            ? authenticate(username, password, alert)
            : handleRegister(username, password, () => resetForm());
        }}
        innerRef={formikRef}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => {
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
                  errorMessage={touched.username ? errors.username : ''}
                />
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  errorMessage={touched.password ? errors.password : ''}
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
  authenticate: (username, password, alert) =>
    dispatch(authenticateAction(username, password, alert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
