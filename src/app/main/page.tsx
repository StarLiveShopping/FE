'use client';

import MoreProductsModal1 from '@/components/modal/moreProductModal1';
import MoreProductsModal2 from '@/components/modal/moreProductModal2';
import CategoryBestSellers from '@/container/mainPage/categoryBestSellers/CategoryBestSellers';
import NextLiveProduct from '@/container/mainPage/nextLiveProduct/NextLiveProduct';
import NowLiveProduct from '@/container/mainPage/nowLiveProduct/NowLiveProduct';
import PopularProducts from '@/container/mainPage/popularProducts/PopularProducts';

const MainPage = () => {
  return (
    <>
      <div className="sm:px-24 sm:py-24 bg-gray-100">
        <div className="grid sm:grid-cols-2 gap-6 justify-center items-center">
          <div className="sm:flex sm:justify-end relative">
            <MoreProductsModal1 />
            <NowLiveProduct liveProductId={10} />
          </div>
          <div className="sm:flex relative">
            <MoreProductsModal2 />
            <NextLiveProduct liveProductId={11} />
          </div>
        </div>
      </div>
      <div>
        <PopularProducts />
      </div>
      <div>
        <CategoryBestSellers />
      </div>
    </>
  );
};

export default MainPage;
