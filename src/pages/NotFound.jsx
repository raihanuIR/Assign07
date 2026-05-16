import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[60vh]">
      <h1 className="text-9xl font-bold text-[#2b4a3f] mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-slate-800 mb-6">Page Not Found</h2>
      <p className="text-slate-500 mb-8 max-w-md">
        Oops! We couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <Link to="/" className="btn bg-[#2b4a3f] text-white hover:bg-[#1f362e] border-none px-8">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
