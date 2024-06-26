import SkeletonHero from "./SkeletonHero";
import SkeletonProduct from "./SkeletonProduct";
const SkeletonHome = () => {
  return (
    <div data-testid="skeleton-home">
      <SkeletonHero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {[...Array(10).keys()].map((item) => (
              <SkeletonProduct key={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkeletonHome;
