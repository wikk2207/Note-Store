import React from 'react';
import { ThemeProvider } from 'styled-components';
import PageContext from 'context';
import { render } from 'utils/test-utils';
import { theme } from 'theme/mainTheme';
import Card from './Card';

describe('Card component', () => {
  const data = {
    id: '1',
    title: 'Hello World!',
    content: 'Hello World',
    twitterName: 'twitter',
    articleUrl: 'article',
    created: 'sunday',
  };

  const renderComponent = (cardType) =>
    render(
      <PageContext.Provider value={cardType}>
        <ThemeProvider theme={theme}>
          <Card
            pageContext={cardType}
            id={data.id}
            title={data.title}
            content={data.content}
            articleUrl={data.articleUrl}
            twitterName={data.twitterName}
            created={data.created}
          />
        </ThemeProvider>
      </PageContext.Provider>,
      { initialState: {} },
    );

  it('Renders note Card', () => {
    const { getByText, queryByTestId } = renderComponent('notes');

    expect(getByText(data.title));
    expect(getByText(data.content));
    expect(getByText(data.created));
    expect(queryByTestId(/twitterAvatar/i)).toBeNull();
    expect(queryByTestId(/articleLink/i)).toBeNull();
  });

  it('Renders twitter Card', () => {
    const { getByText, queryByTestId } = renderComponent('twitters');

    expect(getByText(data.title));
    expect(getByText(data.content));
    expect(getByText(data.created));
    expect(queryByTestId(/twitterAvatar/i)).not.toBeNull();
    expect(queryByTestId(/articleLink/i)).toBeNull();
  });

  it('Renders article Card', () => {
    const { getByText, queryByTestId } = renderComponent('articles');

    expect(getByText(data.title));
    expect(getByText(data.content));
    expect(getByText(data.created));
    expect(queryByTestId(/twitterAvatar/i)).toBeNull();
    expect(queryByTestId(/articleLink/i)).not.toBeNull();
  });
});
