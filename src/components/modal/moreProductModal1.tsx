import { moreProducts } from '@/data/moreProducts';
import { ScrollArea } from '../ui/scroll-area';
import { FaChevronUp } from 'react-icons/fa6';
import { moreProductsModal1Atom } from '@/state/modalState';
import { useAtom } from 'jotai';

const MoreProductsModal1 = () => {
  // jotai 설정 추가 필요
  const [isOpen, setIsOpen] = useAtom(moreProductsModal1Atom);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute bottom-0 right-0 z-50 w-full lg:w-[30.6rem]">
      <div className="border border-gray-400 w-auto bg-gray-50 rounded-md">
        <button
          className="rounded w-full text-left p-3 flex items-center justify-between text-gray-500"
          onClick={closeModal}
        >
          {moreProducts.length}개 상품 더보기
          <FaChevronUp className="w-5 h-5" />
        </button>
        <ScrollArea className="bg-gray-50 rounded-md border border-gray-400 w-full h-60">
          {moreProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center space-x-6 p-6 border-b last:border-none"
            >
              <img
                src={product.imgurl}
                alt={product.title}
                className="w-20 h-20 rounded-md object-cover"
              />
              <div className="flex-col justify-center items-center space-y-4">
                <p className="text-sm">{product.title}</p>
                <p className="text-xl font-bold text-black">
                  {product.price.toLocaleString()}
                  <span className="text-base">원</span>
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default MoreProductsModal1;
