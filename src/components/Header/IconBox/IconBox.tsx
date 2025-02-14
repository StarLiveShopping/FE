interface IconBoxProps extends React.HTMLProps<HTMLDivElement> {
  imgSrc: string;
  name?: string;
  alt?: string;
}

export default function IconBox({ imgSrc, name, alt, ...props }: IconBoxProps) {
  return (
    <div
      {...props}
      className="w-20 h-[70px] flex flex-col justify-center items-center hover:cursor-pointer hover:bg-slate-200 transition duration-300 rounded-md p-2"
    >
      <div className="w-10 mb-1">
        <img src={imgSrc} alt={alt} />
      </div>
      {name && <div className="text-center text-gray-500 ">{name}</div>}
    </div>
  );
}
