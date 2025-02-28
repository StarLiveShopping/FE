import { Item } from './Item';

export default function MegaMenu() {
  // # TODO - API요청으로 카테고리 리스트 받아오기
  const itemList = [
    '카테고리1',
    '카테고리2',
    '카테고리3',
    '카테고리4',
    '카테고리5',
  ];

  return (
    <div className="absolute top-full w-40 border-solid border-2 border-gray-300 bg-white">
      <ul className="list-none">
        {itemList.map((item, idx) => {
          return <Item key={idx}>{item}</Item>;
        })}
      </ul>
    </div>
  );
}
