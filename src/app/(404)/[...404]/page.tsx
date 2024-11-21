import Compass from './Compass';

export default function NotFound() {
  return (
    <div className="w-full h-screen flex-center flex-col gap-y-12 bg-main-3">
      <div className="flex flex-col gap-y-10">
        <div className="flex animate-pulse items-end gap-x-2">
          <h1 className="text-6xl font-bold">404</h1>
          <h1 className="text-4xl font-medium">존재하지 않는 페이지...</h1>
        </div>
        <div className="text-2xl">
          <p>찾을 수 없는 페이지에 도착하셨어요</p>
          <p className="my-4">
            이제 길을 다시 찾아볼까요? 원하는 페이지를 찾도록 도와 드릴게요!
          </p>
        </div>
      </div>
      <Compass />
    </div>
  );
}
