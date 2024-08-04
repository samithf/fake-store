export function ProductCardSkeleton() {
  // create a skeleden for product card using product card component
  return (
    <div className="bg-white p-4 rounded-md shadow-md h-[400px]">
      <div className="w-full h-52 bg-gray-200 rounded-md"></div>
      <div className="mt-4">
        <div className="w-1/2 h-4 bg-gray-200 rounded-md"></div>
        <div className="mt-2 w-1/3 h-4 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
}
