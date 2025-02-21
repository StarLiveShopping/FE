import { FaRegCalendarAlt } from 'react-icons/fa';

const OtLogo = () => {
  return (
    <div className="flex w-20 h-8 items-center justify-center text-gray-600 text-center text-base font-bold cursor-pointer">
      <FaRegCalendarAlt />
      <span className="ml-2">편성표</span>
    </div>
  );
};

export default OtLogo;
