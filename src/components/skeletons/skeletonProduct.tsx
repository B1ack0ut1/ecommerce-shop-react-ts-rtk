import Skeleton from "./Skeleton";

const SkeletonProduct = () => {
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <Skeleton className="w-[130px] h-[160px] bg-[rgb(199_199_199)] group-hover:scale-110 transition duration-300" />
          </div>
        </div>
      </div>
      {/* category & title & price */}
      <Skeleton className="text w-[150px]" />
      {/* Multiple skeleton lines for product name */}
      <Skeleton className="text w-[230px]" />
      <Skeleton className="text w-[230px]" />
      <Skeleton className="text w-[50px]" />
    </div>
  );
};

export default SkeletonProduct;
