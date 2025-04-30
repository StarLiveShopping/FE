interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: 'kakao' | 'naver' | 'google' | 'signUp';
}

const styles = {
  kakao: 'bg-[#FEE500] text-[#000000] text-opacity-85',
  naver: 'bg-[#03C75A] text-[#FFFFFF]',
  google: 'bg-white border-solid border border-gray-400',
  signUp: 'bg-white border-solid border border-gray-200',
};

const srcs = {
  kakao: '/icons/kakaoSymbol.svg',
  naver: '/icons/naverSymbol.svg',
  google: '/icons/googleSymbol.svg',
  signUp: '',
};

export default function Button({ name, children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`flex justify-center items-center w-80 h-14 rounded-xl font-bold hover:brightness-90 ${styles[name]}`}
    >
      {srcs[name] && <img className="h-4 mr-3" src={`${srcs[name]}`}></img>}
      {children}
    </button>
  );
}
