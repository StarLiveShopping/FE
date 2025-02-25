import clsx from 'clsx';

interface EditButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export default function EditButton({ name, className }: EditButtonProps) {
  return (
    <button
      className={clsx(
        className,
        'border border-gray-200 rounded-md h-[30px] px-[10px] tracking-tighter'
      )}
    >
      <span>{name}</span>
    </button>
  );
}
