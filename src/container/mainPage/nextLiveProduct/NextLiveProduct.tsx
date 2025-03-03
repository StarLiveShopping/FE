import DateTimer from '@/components/mainPage/dateTimer/DateTimer';
import LiveProductDetail from '@/components/mainPage/liveProductDetail/LiveProductDetail';
import MoreProducts from '@/components/mainPage/moreProducts/MoreProducts';
import OtLogo from '@/components/mainPage/otLogo/OtLogo';
import { Card, CardContent } from '@/components/ui/card';
import { LiveProductProps } from '../nowLiveProduct/NowLiveProduct';

const NextLiveProduct: React.FC<LiveProductProps> = ({ liveProductId }) => {
  // liveProductId로 라이브 상품 정보와 연관 상품의 정보 불러오기

  return (
    <Card className="shadow-lg sm:max-w-[34rem] w-auto">
      <div className="relative flex justify-between px-4">
        <div className="flex ml-2 mt-5">
          <DateTimer dateToggle={true} liveDate={'2025-02-10'} />
        </div>
        <div className="mt-4">
          <OtLogo />
        </div>
      </div>
      <img
        src="/images/tempImg2.jpeg"
        alt="LG QNED TV"
        className="mt-2 w-full h-60 object-cover cursor-pointer"
      />
      <CardContent>
        <LiveProductDetail
          titleText={'[세일] LG QNED TV 217cm [86QNED80TKA]'}
          isHaveDiscount={true}
          discountPrice={332000}
          price={355000}
        />
        <MoreProducts productsId={[1, 2, 3]} modalId={2} />
      </CardContent>
    </Card>
  );
};

export default NextLiveProduct;
