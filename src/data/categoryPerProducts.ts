// 임시 파일

export type Product = {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  imgurl: string;
  options?: string;
};
export type ProductCategories = {
  가전: Product[];
  명품잡화: Product[];
  패션의류: Product[];
  언더웨어: Product[];
  레포츠: Product[];
  식품: Product[];
  인테리어: Product[];
  '생활/건강': Product[];
  주방용품: Product[];
  뷰티: Product[];
};

export const categoryPerProducts: ProductCategories = {
  가전: [
    {
      id: 1,
      name: 'LG 디오스 오브제 김치냉장고 491L',
      price: 1993000,
      imgurl: '/images/tempImg2.jpeg',
    },
    {
      id: 2,
      name: 'LG 디오스 오브제 냉장고',
      price: 1698370,
      imgurl: '/images/tempImg2.jpeg',
    },
    {
      id: 3,
      name: '삼성 냉장고 227L',
      price: 800000,
      discountPrice: 535000,
      imgurl: '/images/tempImg2.jpeg',
      options: '무료배송',
    },
    {
      id: 4,
      name: 'LG 디오스 오브제 냉장고 832L',
      price: 1422000,
      imgurl: '/images/tempImg2.jpeg',
      options: '무료배송',
    },
  ],
  명품잡화: [
    {
      id: 5,
      name: '명품 핸드백',
      price: 2500000,
      imgurl: '/images/tempImg2.jpeg',
    },
    {
      id: 6,
      name: '럭셔리 지갑',
      price: 750000,
      imgurl: '/images/tempImg2.jpeg',
    },
  ],
  패션의류: [],
  언더웨어: [],
  레포츠: [],
  식품: [],
  인테리어: [],
  '생활/건강': [
    {
      id: 29,
      name: '프리미엄 휴지 세트',
      price: 25000,
      imgurl: '/images/tempImg2.jpeg',
    },
    {
      id: 30,
      name: '고급 칫솔 4개입',
      price: 12000,
      imgurl: '/images/tempImg2.jpeg',
    },
  ],
  주방용품: [
    {
      id: 33,
      name: '프리미엄 냄비 세트',
      price: 120000,
      imgurl: '/images/tempImg2.jpeg',
    },
    {
      id: 34,
      name: '고급 주방칼 세트',
      price: 85000,
      imgurl: '/images/tempImg2.jpeg',
    },
  ],
  뷰티: [
    {
      id: 47,
      name: '스킨케어 세트',
      price: 99000,
      imgurl: '/images/tempImg2.jpeg',
    },
    {
      id: 48,
      name: '프리미엄 립스틱',
      price: 45000,
      imgurl: '/images/tempImg2.jpeg',
    },
  ],
};
