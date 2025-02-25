interface ItemCardProps {
  img: string;
  title: string;
  price: string;
}

export default function ItemCard({ img, title, price }: ItemCardProps) {
  return (
    <a className="flex">
      <div className="flex w-[100px] h-[100px] justify-center items-center border">
        <img src="/images/Logo.png" />
      </div>
      <span className="flex flex-col w-[297px] h-[100px] pl-3 justify-center gap-2">
        <span className=" block h-[41px] text-sm line-clamp-2">{title}</span>
        <span className=" block h-[17px] text-base">
          <span className="font-bold">{price}</span>
          <span>원</span>
        </span>
      </span>
    </a>
  );
}
