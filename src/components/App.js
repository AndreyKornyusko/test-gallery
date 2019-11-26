import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../configs/routes';
import styles from './App.module.scss';


const MainPage = lazy(() =>
  import('../pages/MainPage' /* webpackChunkName: "main-page" */),
);


const App = () => (
  <div className={styles.mainWrapper}>
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path={routes.MAIN} component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div >

);

export default App;
