import {
  moreProductsModal1Atom,
  moreProductsModal2Atom,
} from '@/state/modalState';
import { useSetAtom } from 'jotai';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';

export interface ProductProps {
  productsId: number[];
  modalId: number;
}

const MoreProducts: React.FC<ProductProps> = ({ productsId, modalId }) => {
  const setIsOpen1 = useSetAtom(moreProductsModal1Atom);
  const setIsOpen2 = useSetAtom(moreProductsModal2Atom);

  const openModal = (modalId: number) => {
    if (modalId == 1) {
      setIsOpen1(true);
    } else if (modalId == 2) {
      setIsOpen2(true);
    }
  };

  return (
    <div className="border border-gray-400 min-w-md max-w-lg w-md bg-gray-50 rounded-md">
      <button
        className="w-full text-left p-3 flex items-center justify-between text-gray-500"
        onClick={() => openModal(modalId)}
      >
        {productsId.length}개 상품 더보기
        <FaChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
};

export default MoreProducts;
