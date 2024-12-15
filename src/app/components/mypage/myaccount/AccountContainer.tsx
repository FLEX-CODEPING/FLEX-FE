import { useEffect, useState } from 'react';
import { callGet, callPatch } from '@/app/utils/callApi';
import { INCOME_RANGE_MAP, INTEREST_MAP } from '@/app/constants/auth';
import { ACCOUNT_TEXT } from '@/app/constants/mypage';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../../common/Button';
import MyPersonalInfo from './MyPersonalInfo';
import MyInterest from './MyInterest';
import SaveModal from './SaveModal';
import SaveFinModal from './SaveFinModal';

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

  const handleSignUpClick = () => {
    if (isSatisfied) {
      setIsSaveModalOpen(true);
    } else alert('입력정보를 확인해주세요!');
  };

  const handleSave = async () => {
    const mappedInterests = formData.interestKeywords.map(
      (keyword) => INTEREST_MAP[keyword],
    );
    const mappedSalaryRange = INCOME_RANGE_MAP[formData.salaryRange];

    const payload = {
      nickname: formData.nickname,
      blogName: formData.blogName,
      birth: formData.birth,
      salary: mappedSalaryRange,
      interestKeywords: mappedInterests,
      profileImageUrl: formData.profileImageUrl,
    };

    try {
      const response = await callPatch('/api/users', { payload });
      if (response.isSuccess) {
        setIsSaveModalOpen(false);
        setIsSaveFinModalOpen(true);
        alert('프로필이 성공적으로 저장되었습니다.');
      } else {
        alert('프로필 저장에 실패했습니다.');
        console.error('응답 실패:', response.message);
      }
    } catch (error) {
      console.error('프로필 저장 중 오류 발생:', error);
      alert('프로필 저장 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="w-[500px] gap-y-5 flex flex-col">
      <div className="text-black-0 font-bold text-[26px] flex justify-center">
        {ACCOUNT_TEXT[0]}
      </div>
      <div className="flex justify-center">
        <Image
          src={formData.profileImageUrl || '/images/profile.png'}
          alt="profile"
          width={80}
          height={80}
          className="rounded-[32px]"
        />
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
