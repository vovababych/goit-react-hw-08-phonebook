import DecorContainer from './components/DecorContainer';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomeView from './pages/HomeView';
import RegisterView from './pages/RegisterView';
import LoginView from './pages/LoginView';
import ContactsView from './pages/ContactsView';

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
      {/* <DecorContainer title={'Телефонная книга'}>
        <ContactForm />
      </DecorContainer>
      <DecorContainer title="Список контактов">
        <Filter />
        <ContactsList />
      </DecorContainer> */}
    </>
  );
}

export default App;
