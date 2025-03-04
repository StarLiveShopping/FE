import Button from '@/components/Login/Button/Button';

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-96 h-[600px] flex flex-col justify-between border-solid border-gray-300 border rounded-md">
        {/* 헤더 */}
        <div className="flex min-h-14 p-3 border-solid border-b border-gray-300">
          <button className="flex items-center text-xl font-bold gap-2">
            <img
              className="w-6 h-6"
              src="/icons/backArrow.svg"
              alt="backButton"
            />
            로그인
          </button>
        </div>

        {/* 본문 영역(버튼) */}
        <li className="h-full w-full list-none flex flex-col items-center justify-center gap-10">
          <Button name="kakao">카카오 로그인</Button>
          <Button name="naver">네이버 로그인</Button>
          <Button name="google">Google 로그인</Button>
        </li>

        {/* 회원가입 (버튼) */}
        <div className="w-full min-h-20 flex justify-center items-center">
          <Button name="signUp">회원가입</Button>
        </div>
      </div>
    </div>
  );
}
