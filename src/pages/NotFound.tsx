import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center bg-jomoo-dark p-12 rounded-lg max-w-md">
          <h1 className="text-8xl font-bold mb-4 text-jomoo-accent">404</h1>
          <p className="text-xl text-jomoo-text mb-6">Oops! Page not found</p>
          <p className="text-jomoo-muted mb-8">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
