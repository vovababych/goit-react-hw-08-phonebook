import DecorContainer from '../components/DecorContainer';
import Login from '../components/Login';

export default function LoginView() {
  return (
    <>
      <DecorContainer title={'Страница логина'}>
        <Login />
      </DecorContainer>
    </>
  );
}
