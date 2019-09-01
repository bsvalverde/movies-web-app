import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MoviesIndex from './containers/MoviesIndex/MoviesIndex';

import Layout from './containers/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';

const MovieInformation = React.lazy(() => {
  return import('./containers/MovieInformation/MovieInformation');
});

const App = (props) => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/movie/:id" render={(props) => <MovieInformation {...props} />} />
          <Route path="/upcoming/:page?" component={MoviesIndex} />
          <Route render={() => <Redirect to="/upcoming" />} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
