import { useEffect, useState } from 'react';
import { callGet, callPatch } from '@/app/utils/callApi';
import { INCOME_RANGE_MAP, INTEREST_MAP } from '@/app/constants/auth';
import { ACCOUNT_TEXT } from '@/app/constants/mypage';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { cameraIcon } from '@/app/constants/iconPath';
import Button from '../../common/Button';
import MyPersonalInfo from './MyPersonalInfo';
import MyInterest from './MyInterest';
import SaveModal from './SaveModal';
import SaveFinModal from './SaveFinModal';
import Icons from '../../common/Icons';

function AccountContainer() {
  const [formData, setFormData] = useState<AccountFormTypes>({
    birth: '',
    nickname: '',
    blogName: '',
    salaryRange: '',
    interestKeywords: [],
    profileImageUrl: '',
  });
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isSaveFinModalOpen, setIsSaveFinModalOpen] = useState(false);
  const router = useRouter();

  const isSatisfied =
    formData.blogName &&
    formData.nickname &&
    formData.interestKeywords.length !== 0;

  const updateFormData = (key: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await callGet('/api/users/profile');
        if (response.isSuccess) {
          const {
            nickname,
            blogName,
            birth,
            salaryRange,
            interests,
            profileImageUrl,
          } = response.result;

          setFormData({
            nickname,
            blogName,
            birth,
            salaryRange,
            interestKeywords: interests,
            profileImageUrl,
          });
        } else {
          console.error('프로필 정보를 불러오지 못했습니다.');
        }
      } catch (error) {
        console.error('프로필 데이터 요청 중 오류 발생:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleProfileImageUpload = async (file: File) => {
    try {
      // Presigned URL 요청
      console.log('Uploading File:', file.name);

      const response = await fetch(
        `/api/blog/images?bucketName=dev-user&fileName=${file.name}`,
      );

      if (!response.ok) {
        throw new Error('Presigned URL 요청 실패');
      }

      const resData = await response.json();
      const presignedUrl = resData.result;
      console.log('Presigned URL:', presignedUrl);

      // 이미지 PUT 요청
      const uploadResponse = await fetch(presignedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': file.type,
        },
        body: file,
      });

      if (!uploadResponse.ok) {
        throw new Error('이미지 업로드 실패');
      }

      // 업로드된 이미지 URL 생성
      const imageUrl = presignedUrl.split('?')[0];
      console.log('Uploaded Image URL:', imageUrl);

      // 이미지 URL 확인 (선택적 검증)
      const verifyResponse = await fetch(imageUrl);
      if (!verifyResponse.ok) {
        throw new Error('이미지 확인 실패');
      }

      console.log('Image Verified Successfully');

      // formData에 이미지 URL 업데이트
      updateFormData('profileImageUrl', imageUrl);
      toast.success('프로필 이미지가 성공적으로 업로드되었습니다.');
    } catch (error) {
      console.error('Error uploading profile image:', error);
      toast.error('이미지 업로드에 실패했습니다.');
    }
  };

  const handleSignUpClick = () => {
    if (isSatisfied) {
      setIsSaveModalOpen(true);
    } else toast.error('입력정보를 확인해주세요!');
  };

  const handleSave = async () => {
    // 관심 키워드 배열 변환
    const mappedInterests = formData.interestKeywords.map(
      (keyword) => INTEREST_MAP[keyword] || keyword,
    );

    const mappedSalaryRange = INCOME_RANGE_MAP[formData.salaryRange];

    // 기존 이미지 유지 로직
    const payload = {
      nickname: formData.nickname,
      blogName: formData.blogName,
      birth: formData.birth,
      salary: mappedSalaryRange,
      interestKeywords: mappedInterests,
      profileImageUrl: formData.profileImageUrl || '/images/profile.png', // 기존 이미지 유지
    };

    try {
      const response = await callPatch('/api/users', payload);
      if (response.isSuccess) {
        setIsSaveModalOpen(false);
        setIsSaveFinModalOpen(true);
        toast.success('프로필이 성공적으로 저장되었습니다.');
      } else {
        toast.error('프로필 저장에 실패했습니다.');
        console.error('응답 실패:', response.message);
      }
    } catch (error) {
      console.error('프로필 저장 중 오류 발생:', error);
      toast.error('프로필 저장 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="w-[500px] gap-y-5 flex flex-col">
      <div className="text-black-0 font-bold text-[26px] flex justify-center">
        {ACCOUNT_TEXT[0]}
      </div>
      <div className="h-[130px] flex items-center justify-center gap-[70px]">
        <div className="flex justify-center relative">
          <Image
            src={formData.profileImageUrl || '/images/profile.png'}
            alt="profile"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div
            onClick={() =>
              document.getElementById('profileImageInput')?.click()
            }
            className="absolute bottom-0 right-0 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center border border-gray-300 shadow-md z-10 cursor-pointer"
          >
            <Icons name={cameraIcon} className="w-4 h-4 text-gray-600" />
          </div>
          <input
            id="profileImageInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                handleProfileImageUpload(file);
              }
            }}
          />
        </div>
      </div>
      <MyPersonalInfo formData={formData} updateFormData={updateFormData} />
      <MyInterest formData={formData} updateFormData={updateFormData} />
      <div className="flex justify-center">
        <Button
          buttonText={ACCOUNT_TEXT[1]}
          type="account"
          onClickHandler={handleSignUpClick}
        />
      </div>
      {isSaveModalOpen && (
        <SaveModal
          onClose={() => setIsSaveModalOpen(false)}
          onSave={handleSave}
        />
      )}
      {isSaveFinModalOpen && (
        <SaveFinModal
          onClose={() => {
            setIsSaveFinModalOpen(false);
            router.push('/');
          }}
        />
      )}
    </div>
  );
}

export default AccountContainer;
