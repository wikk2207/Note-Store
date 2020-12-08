import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import plusIcon from 'assets/icons/plus.svg';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  border-radius: 50px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-size: 35%;
  z-index: 10000;
`;

const StyledLoadingIndicator = styled(Heading)`
  font-size: 3em;
  color: white;
  position: fixed;
  top: 40vh;
  left: 40%;
  z-index: 10001;
  ::before {
    content: '';
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 300vw;
    height: 200vh;
    top: -100vh;
    left: -100vw;
  }
`;

class GridTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewItemBarVisible: false,
    };
  }

  toggleNewItemBar = () => {
    this.setState((prevState) => ({ isNewItemBarVisible: !prevState.isNewItemBarVisible }));
  };

  render() {
    const { children, pageContext, isLoading, notesSize, handleChange } = this.props;
    const { isNewItemBarVisible } = this.state;
    return (
      <UserPageTemplate pageType={pageContext}>
        <StyledWrapper>
          {isLoading && <StyledLoadingIndicator>Loading</StyledLoadingIndicator>}
          <StyledPageHeader>
            <Input search placeholder="Search" onChange={(e) => handleChange(e.target.value)} />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>{`${notesSize} ${pageContext}`}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon
            onClick={this.toggleNewItemBar}
            icon={plusIcon}
            activeColor={pageContext}
          />
          <NewItemBar handleClose={this.toggleNewItemBar} isVisible={isNewItemBarVisible} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isLoading: PropTypes.bool.isRequired,
  notesSize: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

const mapStateToProps = ({ isLoading }) => ({
  isLoading,
});

export default connect(mapStateToProps)(withContext(GridTemplate));
