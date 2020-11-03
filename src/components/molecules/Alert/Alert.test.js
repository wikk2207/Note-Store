import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from 'theme/mainTheme';
import Alert from './Alert';

describe('Alert component', () => {
  const data = {
    message: 'This is message',
    close: () => null,
    style: {},
  };
  const alertTypes = {
    info: 'info',
    error: 'error',
    success: 'success',
  };
  const renderComponent = (alertType) => {
    const alertOptions = {
      type: alertType,
    };
    return render(
      <ThemeProvider theme={theme}>
        <Alert options={alertOptions} {...data} />
      </ThemeProvider>,
    );
  };

  it('Renders info Alert', () => {
    const { getByText, getByAltText } = renderComponent(alertTypes.info);

    expect(getByText(data.message));
    expect(getByAltText(alertTypes.info));
  });

  it('Renders success Alert', () => {
    const { getByText, getByAltText } = renderComponent(alertTypes.success);

    expect(getByText(data.message));
    expect(getByAltText(alertTypes.success));
  });

  it('Renders error Alert', () => {
    const { getByText, getByAltText } = renderComponent(alertTypes.error);

    expect(getByText(data.message));
    expect(getByAltText(alertTypes.error));
  });
});
