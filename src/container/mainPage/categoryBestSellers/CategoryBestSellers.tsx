import SectionTitle from '@/components/mainPage/sectionTitle/SectionTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/categories';
import {
  categoryPerProducts,
  ProductCategories,
} from '@/data/categoryPerProducts';
import { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CategoryBestSellers = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof ProductCategories>('가전');
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(8);
      } else if (window.innerWidth >= 720) {
        setVisibleCount(5);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const visibleCategories = categories.slice(
    visibleIndex,
    visibleIndex + visibleCount
  );

  return (
    <div className="p-4 max-w-5xl mx-auto py-12 sm:h-[50rem] pb-20">
      <SectionTitle text={`카테고리 별 인기 상품`} />
      <div className="flex items-center justify-center gap-2 overflow-hidden relative py-6">
        {visibleIndex > 0 && (
          <Button
            variant="ghost"
            onClick={() =>
              setVisibleIndex((prev) => Math.max(0, prev - visibleCount))
            }
            className="absolute left-4 size-8 rounded-full border border-gray-300"
          >
            <MdChevronLeft />
          </Button>
        )}
        {visibleCategories.map((category) => (
          <div
            key={category.name}
            className={`flex flex-col items-center cursor-pointer p-2 transition-all rounded-full group ${selectedCategory === category.name ? 'border-red-500 font-bold' : null}`}
            onClick={() =>
              setSelectedCategory(category.name as keyof ProductCategories)
            }
          >
            <div
              className={`w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 border-2 group-hover:border-red-500 ${selectedCategory === category.name ? 'border-red-500 font-bold' : null}`}
            >
              {category.icon}
            </div>
            <span className="text-sm mt-4 group-hover:font-bold">
              {category.name}
            </span>
          </div>
        ))}
        {visibleIndex + visibleCount < categories.length && (
          <Button
            variant="ghost"
            onClick={() =>
              setVisibleIndex((prev) =>
                Math.min(categories.length - visibleCount, prev + visibleCount)
              )
            }
            className="absolute right-4 size-8 rounded-full border border-gray-300"
          >
            <MdChevronRight />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {categoryPerProducts[selectedCategory]?.map((product) => (
          <Card
            key={product.id}
            className="border-2 hover:border-red-500 cursor-pointer"
          >
            <CardContent className="p-4">
              <img
                src={product.imgurl}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <div className="flex flex-col justify-center mx-2">
                <span className="h-12 text-sm">{product.name}</span>
                <div className="flex flex-col h-20">
                  {product.discountPrice ? (
                    <div className="mt-2">
                      <span className="text-xl font-semibold">
                        {product.discountPrice.toLocaleString()}
                        <span className="text-base">원</span>
                      </span>
                      <div>
                        <span className="text-red-600 font-bold text-lg mr-2">
                          {Math.round(
                            ((product.price -
                              (product.discountPrice
                                ? product.discountPrice
                                : 0)) /
                              product.price) *
                              100
                          )}
                          <span className="text-base">%</span>
                        </span>
                        <span className="text-gray-400 text-base line-through">
                          {product.price.toLocaleString()}
                          <span className="text-base">원</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-1 mb-1">
                      <span className="text-lg font-semibold">
                        {product.price.toLocaleString()}
                        <span className="text-base">원</span>
                      </span>
                    </div>
                  )}
                </div>
                {product.options ? (
                  <span className="text-gray-400 text-sm">
                    {product.options}
                  </span>
                ) : (
                  <span className="text-white text-sm">.</span>
                )}
              </div>
            </CardContent>
          </Card>
        )) || (
          <span className="text-black">해당 카테고리의 상품이 없습니다.</span>
        )}
      </div>
    </div>
  );
};

export default CategoryBestSellers;
