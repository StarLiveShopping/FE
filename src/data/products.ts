// products.ts 임시 파일일
export interface Product {
  id: number;
  title: string;
  price: number;
  discountPrice?: number;
  imgurl: string;
  options?: string;
}

const getRandomOption = () => {
  const options = ['무료배송', '사은품 · 무료배송 · 무12', ''];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const getDiscountPrice = () => {
  return Math.random() < 1 / 3 ? 29900 : undefined;
};

export const products: Product[] = Array.from({ length: 92 }, (_, i) => ({
  id: i + 1,
  title: `[상품] 상품${i + 1}`,
  imgurl: '/images/tempImg2.jpeg',
  price: 50000,
  discountPrice: getDiscountPrice(),
  options: getRandomOption(),
}));
