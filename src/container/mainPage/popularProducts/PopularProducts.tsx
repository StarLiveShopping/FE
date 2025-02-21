import SectionTitle from '@/components/mainPage/sectionTitle/SectionTitle';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { products } from '@/data/products';
import { useEffect, useState } from 'react';

const PopularProducts = () => {
  // 인기 상품의 정보 불러오기
  // 일단 임시 파일(src/data/products.ts) 사용
  const ITEMS_PER_LOAD = 6;
  const PAGE_GROUP_SIZE = 10;

  const [displayedProducts, setDisplayedProducts] = useState(
    products.slice(0, ITEMS_PER_LOAD)
  );
  const [pageGroup, setPageGroup] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_LOAD);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile === null) return null;

  const loadMoreProducts = () => {
    const nextProducts = products.slice(
      displayedProducts.length,
      displayedProducts.length + ITEMS_PER_LOAD
    );
    setDisplayedProducts((prev) => [...prev, ...nextProducts]);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    setDisplayedProducts(
      products.slice((page - 1) * ITEMS_PER_LOAD, page * ITEMS_PER_LOAD)
    );
  };

  const startPage = pageGroup * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPages);
  const handleNextGroup = () =>
    setPageGroup((prev) =>
      Math.min(prev + 1, Math.floor((totalPages - 1) / PAGE_GROUP_SIZE))
    );
  const handlePrevGroup = () => setPageGroup((prev) => Math.max(prev - 1, 0));

  return (
    <div className="container mx-auto max-w-screen-lg py-16">
      <SectionTitle text={`인기 상품 모음`} />
      <div className="grid grid-cols-1 gap-6 justify-center items-center sm:h-[36rem] sm:items-start sm:grid-cols-2 pt-8 pb-4 lg:grid-cols-3">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="border-2 border-gray-100 rounded-sm w-full mb-2 sm:mb-0 cursor-pointer shadow-sm lg:max-w-md lg:w-md lg:min-h-[8rem] hover:border-red-500"
          >
            <img
              src={product.imgurl}
              alt={product.title}
              className="w-full h-40 object-cover rounded-t-sm"
            />
            <div className="flex flex-col justify-center mt-2 mb-1 ml-4 mr-4">
              <span className="text-sm text-gray-600">{product.title}</span>
              {product.discountPrice ? (
                <div className="mt-1 mb-1">
                  <span className="text-red-600 font-bold text-xl mr-2">
                    {Math.round(
                      ((product.price -
                        (product.discountPrice ? product.discountPrice : 0)) /
                        product.price) *
                        100
                    )}
                    <span className="text-base">%</span>
                  </span>
                  <span className="text-2xl font-semibold">
                    {product.discountPrice.toLocaleString()}
                    <span className="text-base">원</span>
                  </span>
                  <span className="text-gray-400 line-through ml-2">
                    {product.price.toLocaleString()}
                    <span className="text-base">원</span>
                  </span>
                </div>
              ) : (
                <div className="mt-1 mb-1">
                  <span className="text-2xl font-semibold">
                    {product.price.toLocaleString()}
                    <span className="text-base">원</span>
                  </span>
                </div>
              )}
              {product.options ? (
                <span className="text-gray-400 text-sm">{product.options}</span>
              ) : (
                <span className="text-white text-sm">.</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {isMobile ? (
        <div className="mt-2 flex justify-center">
          <Button
            onClick={loadMoreProducts}
            className="border border-gray-300 w-full text-gray-500 bg-gray-50 rounded-sm hover:bg-gray-50"
          >
            6개 상품 더보기
          </Button>
        </div>
      ) : (
        <Pagination className="mt-6 flex justify-center">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                onClick={handlePrevGroup}
                className={
                  pageGroup === 0 ? 'pointer-events-none opacity-50' : ''
                }
              >
                Prev
              </PaginationLink>
            </PaginationItem>
            {Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => i + startPage
            ).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageClick(page)}
                  className={
                    currentPage === page ? 'font-bold bg-gray-300' : ''
                  }
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationLink
                onClick={handleNextGroup}
                className={
                  endPage === totalPages ? 'pointer-events-none opacity-50' : ''
                }
              >
                Next
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default PopularProducts;
