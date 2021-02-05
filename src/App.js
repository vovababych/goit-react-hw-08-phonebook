// import DecorContainer from './components/DecorContainer';
// import ContactForm from './components/ContactForm';
// import ContactsList from './components/ContactsList';
// import Filter from './components/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomeView from './pages/HomeView';
import RegisterView from './pages/RegisterView';
import LoginView from './pages/LoginView';
import ContactsView from './pages/ContactsView';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  console.log('isFetchingCurrentUser', isFetchingCurrentUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" redirectTo="/contacts" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
        {/* <DecorContainer title={'Телефонная книга'}>
        <ContactForm />
      </DecorContainer>
      <DecorContainer title="Список контактов">
        <Filter />
        <ContactsList />
      </DecorContainer> */}
      </>
    )
  );
}

export default App;
