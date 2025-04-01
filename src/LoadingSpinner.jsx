import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner({loadingMessage}) {
  return (
    <div className='loadingSpinner'>
     <Spinner animation="border" variant="primary" />
     <p>{loadingMessage}</p>
    </div>
  );
}

export default LoadingSpinner;