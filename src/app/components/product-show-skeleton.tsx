export function ProductShowSkeleton() {
  return (
    <div className="max-w-[600px] mx-auto">
      <div className="flex justify-center items-center w-full h-[400px] bg-gray-200 relative my-10"></div>
      <div className="h-8 bg-gray-200 w-2/3 my-2"></div>
      <div className="h-6 bg-gray-200 w-1/2 my-2"></div>
      <div className="h-6 bg-gray-200 w-full mt-4"></div>
      <div className="h-6 bg-gray-200 w-full my-2"></div>
      <div className="h-6 bg-gray-200 w-1/3 my-2"></div>
    </div>
  );
}
