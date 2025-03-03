import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/main');

  return (
    <div>
      <p>Loading...</p> {/* 로딩 중 메시지 표시 */}
    </div>
  );
}
