import { useRouteError } from 'react-router-dom';
import '../styles/Error.css'

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='error__page flex__row evenly'>
      <div className='error__panel'>
        <h1 className='error__title'>Oops!</h1>
        <p className='error'>Sorry, an unexpected error has occurred.</p>
        <p className='error'>{ error.statusText || error.message }</p>
      </div>
      <div className='error__panel'>
        <img className='error__image' src='./src/assets/images/tristeza-mensaje-de-error.png' alt='tristeza mensaje de error' />
      </div>
    </div>
  );
};

export default ErrorPage;