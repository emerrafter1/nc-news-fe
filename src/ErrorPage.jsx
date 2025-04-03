import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="error-page">
      <h2>We're sorry, we couldn't find the page you are looking for.</h2>
      <p>
        Why not checkout some articles <Link to="/">here</Link>?
      </p>
    </section>
  );
}


export default ErrorPage;