'use client';

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <section className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-[1440px] h-screen gap-y-10">
        <div className="text-slate-600 text-5xl font-bold">
          SomeThing is Wrong....
        </div>
        <div className="text-xl font-medium flex flex-col items-center">
          <div>요청하신 페이지는 찾을 수 없는 페이지입니다.</div>
          <div>
            존재하지 않는 주소 혹은, 요청하신 페이지의 경로가 변경, 삭제되어
            찾을 수 없습니다.
          </div>
        </div>
      </div>
    </section>
  );
}
