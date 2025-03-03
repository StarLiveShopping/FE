import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

interface ProductProps {
  titleText: string;
  isHaveDiscount: boolean;
  price: number;
  discountPrice?: number;
}

const LiveProductDetail: React.FC<ProductProps> = ({
  titleText,
  isHaveDiscount,
  price,
  discountPrice,
}) => {
  const discountRate = Math.round(
    ((price - (discountPrice ? discountPrice : 0)) / price) * 100
  );

  return (
    <>
      <Card className="border-none min-w-base max-w-xl w-xl overflow-hidden">
        <CardContent className="px-3 pt-6 pb-4">
          <div className="text-lg font-bold mb-2 cursor-pointer h-[5rem] w-[26rem] sm:w-auto lg:w-[26rem]">
            {titleText}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center">
                {isHaveDiscount ? (
                  <div className="cursor-pointer">
                    <span className="text-red-600 font-bold text-2xl mr-2">
                      {discountRate}
                      <span className="text-base">%</span>
                    </span>
                    <span className="text-black font-bold text-2xl">
                      {discountPrice?.toLocaleString()}
                      <span className="text-base">원</span>
                    </span>
                    <span className="text-gray-400 line-through ml-2">
                      {price.toLocaleString()}
                      <span className="text-base">원</span>
                    </span>
                  </div>
                ) : (
                  <div className="cursor-pointer">
                    <span className="text-black font-bold text-2xl">
                      {price.toLocaleString()}
                      <span className="text-base">원</span>
                    </span>
                  </div>
                )}
              </div>
              <p className="text-gray-400 text-sm mt-2">
                사은품 · 무료배송 · 무12
              </p>
            </div>
            <button className="border min-w-24 w-32 border-red-500 text-red-500 font-bold py-2 mt-4 rounded-xl">
              구매하기
            </button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LiveProductDetail;
