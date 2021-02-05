import DecorContainer from '../components/DecorContainer';
import Register from '../components/Register';

export default function LoginView() {
  return (
    <>
      <DecorContainer title={'Страница регистрации'}>
        <Register />
      </DecorContainer>
    </>
  );
}
