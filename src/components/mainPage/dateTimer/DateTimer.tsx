import React from 'react';

interface DateTimerProps {
  dateToggle: boolean;
  liveDate: string;
}

const DateTimer: React.FC<DateTimerProps> = ({ dateToggle, liveDate }) => {
  // liveDate = "2025-02-10"
  const weekDayStr = ['일', '월', '화', '수', '목', '금', '토'];
  const [year, month, day] = liveDate.split('-');
  const weekDay = weekDayStr[new Date(liveDate).getDay()];

  const hours = 0;
  const minutes = 21;
  const seconds = 13;

  const timeString = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
  return (
    <div className="flex text-black text-center text-lg font-bold">
      {dateToggle ? (
        <div>
          <span>
            {month}/{day}({weekDay})
          </span>
        </div>
      ) : null}
      <div className="w-24 h-10 ml-4 text-black text-center text-lg font-bold">
        <span>{timeString}</span>
      </div>
    </div>
  );
};

export default DateTimer;
