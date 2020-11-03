import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainTemplate from 'templates/MainTemplate';
import Articles from 'views/Articles';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';
import store from 'store';
import AuthPage from 'views/AuthPage';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import Alert from 'components/molecules/Alert/Alert';

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  offset: '5px',
  timeout: 5000,
  transition: transitions.SCALE,
};

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <AlertProvider template={Alert} {...alertOptions}>
          <Switch>
            <Route exact path={routes.login} component={AuthPage} />
            <Route exact path={routes.register} component={AuthPage} />
            <Route exact path={routes.home} render={() => <Redirect to={routes.notes} />} />
            <Route exact path={routes.notes} component={Notes} />
            <Route path={routes.note} component={DetailsPage} />
            <Route exact path={routes.articles} component={Articles} />
            <Route path={routes.article} component={DetailsPage} />
            <Route exact path={routes.twitters} component={Twitters} />
            <Route path={routes.twitter} component={DetailsPage} />
          </Switch>
        </AlertProvider>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
