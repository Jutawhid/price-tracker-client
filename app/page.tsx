import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllCategories, getAllHighLightedProducts, getAllPopularProducts, getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import RecentTrackProduct from "@/features/homepage/recent-product";
import PopularProducts from "@/features/homepage/popular-products";
import HeroImage from "@/features/homepage/hero-image";

const Home = async () => {
  const allProducts = await getAllProducts({
    page: 1,
    size: 10,
  });
  const allPopularProducts = await getAllPopularProducts({ page: 1, size: 10 });
  const allHighLightedProducts = await getAllHighLightedProducts({ page: 1, size: 10 });
  const allCategories = await getAllCategories();

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{
        fontFamily: "Inter, Noto_Sans",
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1320px] flex-1">
            <HeroImage/>
            <RecentTrackProduct allProducts={allHighLightedProducts} allCategories={[]} />
            <PopularProducts
              allProducts={allPopularProducts}
              allCategories={allCategories}
            />
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Top Amazon Price Drops
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: ` url("https://cdn.usegalileo.ai/sdxl10/dd46383f-57a8-471a-918e-0d2ab09ed87b.png");`,
                  }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Lodge Pre-Seasoned Cast Iron Skillet With Assist Handle,
                    10.25
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    $32.99
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: ` url("https://cdn.usegalileo.ai/sdxl10/b7db570b-99e8-405a-bb91-e1eb59ca7f46.png");`,
                  }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Crest 3D White Professional Effects Whitestrips 20
                    Treatments
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    $47.98
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: ` url("https://cdn.usegalileo.ai/sdxl10/db198001-4e15-4c18-b462-5b2613486488.png");`,
                  }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    The Office: The Complete Series
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    $44.99
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: ` url("https://cdn.usegalileo.ai/stability/2b08d7f8-7e9d-4826-867a-fdc4e52c1113.png");`,
                  }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">
                    Sun Joe SPX3000 2030 Max PSI 1.76 GPM 14.5-Amp Electric High
                    Pressure Washer
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    $139.00
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Amazon Discounts by Category
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: ` url("https://cdn.usegalileo.ai/stability/d0148c81-6595-44dd-b266-602b14901948.png");`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: ` url("https://cdn.usegalileo.ai/stability/795c3e6b-df3f-477c-94d8-3b5fc09b3b96.png");`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: ` url("https://cdn.usegalileo.ai/stability/160caa83-837a-498b-a6fa-a8f220d1150f.png");`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: ` url("https://cdn.usegalileo.ai/sdxl10/d417405e-244e-4d52-93de-c6b1669e6390.png");`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
