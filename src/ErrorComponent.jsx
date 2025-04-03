function ErrorComponent({ error }) {
  if (error.status === 404) {
    return (
      <div>
        <p>404</p>
        <p>Sorry, we couldn't find what you were looking for...</p>
      </div>
    );
  }

  return (
    <div>
      <p>Oops! Something went wrong...</p>
    </div>
  );
}

export default ErrorComponent;
