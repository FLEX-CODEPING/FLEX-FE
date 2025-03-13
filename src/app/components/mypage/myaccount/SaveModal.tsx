import { MY_MODAL_TEXT } from '@/app/constants/mypage';

interface SaveModalProps {
  onClose: () => void;
  onSave: () => void;
}

const SaveModal = ({ onClose, onSave }: SaveModalProps) => {
  return (
    <div className="fixed inset-0 flex-center bg-gray-1 bg-opacity-70 z-50">
      <div className="w-[640px] h-[284px] px-11 py-[48px] bg-white rounded-[20px] flex flex-col justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="text-gray-800 text-2xl font-semibold">
            {MY_MODAL_TEXT[0]}
          </div>
          <div className="text-gray-600 text-base font-normal">
            {MY_MODAL_TEXT[1]}
          </div>
        </div>
        <div className="flex w-full justify-end gap-x-4">
          <button
            type="button"
            onClick={onClose}
            className="h-[42px] px-10 rounded-md border border-black text-black text-sm font-medium"
          >
            {MY_MODAL_TEXT[2]}
          </button>
          <button
            type="button"
            onClick={onSave}
            className="h-[42px] px-10 bg-main-1/90 rounded-md text-white text-sm font-bold"
          >
            {MY_MODAL_TEXT[3]}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SaveModal;
