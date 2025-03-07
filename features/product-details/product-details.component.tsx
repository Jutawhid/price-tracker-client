import PriceInfoCard from '@/components/PriceInfoCard';
import { ProductSpecification } from '@/features/product-details/product-information-specification';

import { formatNumber } from '@/lib/utils';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import ProductHistoryComponent from './product-history.component';
import { AddWatchedProduct } from './addWatchProducts';
import { getProductById } from '../api/public-api';
import PageContainer from '@/components/layout/page-container';

type Props = {
  id: string;
};

const ProductDetails = async ({ id }: Props) => {
  const product: Product = await getProductById(Number(id));

  if (!product) redirect('/');

  // const similarProducts = await getSimilarProducts(id);
  const tabMenu = [
    { id: 0, label: 'Product Details', link: 'details' },
    { id: 1, label: 'Price History', link: 'price_history' },
    { id: 2, label: 'Price Alart', link: 'alart' },
    { id: 3, label: 'Similar Products', link: 'similar_products' }
  ];
  return (
    <PageContainer scrollable>
      <div className="flex flex-col gap-16 flex-wrap py-4">
        <div className="grid grid-flow-row grid-cols-12 gap-2 rounded-none bg-white p-4 shadow sm:gap-10 md:rounded-lg lg:grid-flow-col">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex-grow max-w-full py-0 border border-[#CDDBFF] rounded-[17px]">
              <Image
                src={product?.image_url}
                alt={product?.product_name}
                width={1580}
                height={1400}
                className="border-radius-[17px] m-auto rounded-[17px]"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="flex flex-wrap items-start justify-between gap-5 pb-6">
              <div className="flex flex-col gap-3">
                <p className="text-[20px] font-semibold">
                  {product.product_name}
                </p>

                <Link
                  href={`/categories/${product.category_id}`}
                  target="_blank"
                  className="text-base text-black opacity-50"
                >
                  {product.category_name}
                </Link>
              </div>

              {/* <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#FFF0F0] rounded-10">
                <Image
                  src="/assets/icons/red-heart.svg"
                  alt="heart"
                  width={20}
                  height={20}
                />

                <p className="text-base font-semibold text-[#D46F77]">
                  {product.rating}
                </p>
              </div>

              <div className="p-2 bg-white-200 rounded-10">
                <Image
                  src="/assets/icons/bookmark.svg"
                  alt="bookmark"
                  width={20}
                  height={20}
                />
              </div>

              <div className="p-2 bg-white-200 rounded-10">
                <Image
                  src="/assets/icons/share.svg"
                  alt="share"
                  width={20}
                  height={20}
                />
              </div>
            </div> */}
            </div>

            <div className="flex items-center flex-wrap gap-10 py-6 border-y border-y-[#E4E4E4]">
              <div className="flex flex-col gap-2">
                <p className="text-[34px] font-bold">
                  {/* {product.currency}  */}৳{' '}
                  {formatNumber(product.last_price)}
                </p>
                {/* <p className="text-[21px] text-black opacity-50 line-through">
                {product.currency} {formatNumber(product.originalPrice)}
              </p> */}
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-8 py-2 rounded-[27px] bg-[#FFCF0F] p-2">
                    <Link href={product.product_url} target="_blank">
                      View at Daraz
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-5 flex flex-col gap-5">
              <div className="flex flex-wrap gap-5">
                <PriceInfoCard
                  title="Current Price"
                  iconSrc="/assets/icons/price-tag.svg"
                  // value={`${product.currency} ${formatNumber(product.currentPrice)}`}
                  value={`${
                    product?.currency == 'BDT' ? '৳' : '৳'
                  } ${formatNumber(product?.last_price)}`}
                />
                <PriceInfoCard
                  title="Average Price"
                  iconSrc="/assets/icons/chart.svg"
                  value={`${
                    product?.currency == 'BDT' ? '৳' : '৳'
                  } ${formatNumber(product?.average_price)}`}
                />
                <PriceInfoCard
                  title="Highest Price"
                  iconSrc="/assets/icons/arrow-up.svg"
                  value={`${
                    product?.currency == 'BDT' ? '৳' : '৳'
                  } ${formatNumber(product?.highest_price)}`}
                />
                <PriceInfoCard
                  title="Lowest Price"
                  iconSrc="/assets/icons/arrow-down.svg"
                  value={`${
                    product?.currency == 'BDT' ? '৳' : '৳'
                  } ${formatNumber(product?.lowest_price)}`}
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-5">
              <div className="flex flex-wrap gap-5">
                <AddWatchedProduct />
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="bg-[#F9F9F9] md:bg-transparent">
          <div className="mb-2 flex flex-wrap items-center gap-2 bg-[#fff] p-4 shadow md:my-0 md:flex-nowrap md:bg-transparent md:p-0 md:shadow-none">
            {tabMenu?.map((item, index) => (
              <Link
                key={index}
                href={`#${item?.link}`}
                className="rounded-sm bg-white px-4 py-2 font-semibold text-[#999999] shadow-sm duration-500 hover:bg-[#00215b] hover:text-white sm:text-lg md:text-inherit"
              >
                {item?.label}
              </Link>
            ))}
          </div>
          <div id="details" className="scroll-mt-[90px] md:mt-5">
            <ProductSpecification product={product} />
          </div>

          <ProductHistoryComponent product={product} />

          <div id="alart" className="scroll-mt-[90px] md:mt-5">
            Question
          </div>
        </div>

        {/* {similarProducts && similarProducts?.length > 0 && (
        <div className="py-14 flex flex-col gap-2 w-full">
          <p className="section-text">Similar Products</p>

          <div className="flex flex-wrap gap-10 mt-7 w-full">
            {similarProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )} */}
      </div>
    </PageContainer>
  );
};

export default ProductDetails;
