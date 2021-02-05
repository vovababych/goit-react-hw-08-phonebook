import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./pages/HomeView'));
const RegisterView = lazy(() => import('./pages/RegisterView'));
const LoginView = lazy(() => import('./pages/LoginView'));
const ContactsView = lazy(() => import('./pages/ContactsView'));
const NotFoundView = lazy(() => import('./pages/NotFoundView'));

function App() {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Suspense fallback={<p>Загрузка...</p>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView name={userName ? userName : 'незнакомец'} />
            </PublicRoute>
            <PublicRoute path="/register" redirectTo="/contacts" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/">
              <ContactsView />
            </PrivateRoute>
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </>
    )
  );
}

export default App;
