import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="max-w-md w-full mx-auto px-6 text-center">
          {/* Error Code */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-slate-900 mb-2">404</h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Page not found
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              The page you're looking for doesn't exist or has been moved.
              Please check the URL or navigate back to our homepage.
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 w-full sm:w-auto"
            >
              Return to Homepage
            </a>
          </div>
      </div>
    </div>
  );
};

export default NotFound;
