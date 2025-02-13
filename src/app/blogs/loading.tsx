export default function LoaderForBlogs() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      <span className="ml-4 text-xl text-gray-600">Loading blogs...</span>
    </div>
  );
}