import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <img
        src="https://i.ibb.co.com/4nF7g0cC/flat-design-error-404-page-8251-287.jpg"
        alt="404 Error"
        className="w-80 md:w-96 lg:w-[400px] mb-6"
      />
      <h1 className="text-4xl font-bold text-red-500">Oops! Something went wrong</h1>
      <p className="text-lg text-gray-600 mt-2">
        {error?.statusText || "Page not found"}
      </p>
      <p className="text-gray-500 text-sm mt-1">{error?.message}</p>

      <Link to="/" className="btn btn-neutral mt-6">
        Go Home
      </Link>
    </div>
  );
}

export default ErrorPage;
