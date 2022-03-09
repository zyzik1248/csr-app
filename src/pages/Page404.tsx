import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-8">
      <h1 className="text-6xl font-bold sm:text-9xl">404</h1>
      <h4 className="text-2xl sm:text-4xl">Page not found</h4>
      <Link
        to="/"
        className="bg-purple-600 py-2 px-4 text-white border-2 rounded-md hover:bg-purple-700"
      >
        go back to home
      </Link>
    </div>
  );
};

export default Page404;
