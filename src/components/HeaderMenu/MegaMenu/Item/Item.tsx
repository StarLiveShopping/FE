interface ItemProps {
  children: string;
}

export default function Item({ children }: ItemProps) {
  return (
    <li className="px-3 py-3 hover:bg-slate-200">
      <span>{children}</span>
    </li>
  );
}
