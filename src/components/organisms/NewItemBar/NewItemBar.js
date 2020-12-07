import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';
import { addItem as addItemAction } from 'actions';
import * as Yup from 'yup';
import { validations } from 'utils/text/validations';
import ValidationInput from 'components/molecules/ValidationInput/ValidationInput';

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
  border-left: 10px solid ${({ activecolor, theme }) => theme[activecolor]};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(ValidationInput)`
  border-radius: 20px;
  height: 30vh;
`;

const StyledTextAreaWrapper = styled.div`
  margin: 30px 0 100px;
`;

const StyledInput = styled(ValidationInput)`
  margin-top: 25px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required(validations.required),
    content: Yup.string().required(validations.required),
    articleUrl:
      pageContext === 'articles'
        ? Yup.string().url(validations.url).required(validations.required)
        : null,
    twitterName: pageContext === 'twitters' ? Yup.string().required(validations.required) : null,
  });

  return (
    <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
      <Heading>{`Create new ${pageContext}`}</Heading>
      <Formik
        initialValues={{ title: '', content: '', articleUrl: '', twitterName: '' }}
        onSubmit={(values, { resetForm }) => {
          addItem(pageContext, values);
          handleClose();
          resetForm({});
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <StyledForm>
            <StyledInput
              placeholder="Title"
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              errorMessage={touched.title ? errors.title : ''}
            />
            {pageContext === 'articles' && (
              <StyledInput
                type="text"
                name="articleUrl"
                placeholder="link"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.articleUrl}
                errorMessage={touched.articleUrl ? errors.articleUrl : ''}
              />
            )}
            {pageContext === 'twitters' && (
              <StyledInput
                type="text"
                name="twitterName"
                placeholder="Account Name eg. hello_roman"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterName}
                errorMessage={touched.twitterName ? errors.twitterName : ''}
              />
            )}
            <StyledTextAreaWrapper>
              <StyledTextArea
                type="text"
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
                placeholder="Description"
                errorMessage={touched.content ? errors.content : ''}
                textarea
              />
            </StyledTextAreaWrapper>

            <Button type="submit">add note</Button>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
