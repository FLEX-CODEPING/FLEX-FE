'use client';

import { motion } from 'framer-motion';
import { infoIcon } from '@/app/constants/iconPath';
import {
  ANALYZE_CAUTION,
  ANALYZE_HEADER_TEXT,
  ANALYZE_RESULT_GUIDE,
  ANALYZE_RESULT_TITLE,
} from '@/app/constants/prediction';
import { useEffect, useState } from 'react';
import { callGet } from '@/app/utils/callApi';
import Icons from '../common/Icons';

const AnalyzeContainer = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const [nickname, setNickname] = useState<string>('');
  const [analysisData, setAnalysisData] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await callGet('/api/auth/user');
        if (response.isSuccess) {
          setNickname(response.result.nickname);
        } else {
          console.error('닉네임을 불러오는데 실패했습니다:', response.message);
        }
      } catch (error) {
        console.error('닉네임 요청 중 오류 발생:', error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        const response = await callGet('/api/analysis');
        if (response.isSuccess) {
          setAnalysisData(response.result);
        } else {
          console.error(
            '분석 데이터를 가져오는데 실패했습니다:',
            response.message,
          );
        }
      } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
      }
    };

    fetchAnalysisData();
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      className="w-full flex flex-col gap-5"
    >
      <motion.div
        variants={fadeInVariants}
        className="w-full h-[120px] bg-black-1 px-[4%] pt-[40px]"
      >
        <div className="flex h-12 border-l-2 border-white pl-3 text-2xl text-white justify-between items-end">
          <div className="flex pb-2 tracking-wide">
            <p>{nickname}</p>
            <p className="font-extralight ml-1">{ANALYZE_HEADER_TEXT[0]}</p>
            <p>{ANALYZE_HEADER_TEXT[1]}</p>
            <p className="font-extralight">{ANALYZE_HEADER_TEXT[2]}</p>
          </div>
          <p className="font-semibold text-main-1/90 text-sm tracking-wide">
            {ANALYZE_CAUTION[0]}
          </p>
        </div>
      </motion.div>

      {analysisData ? (
        <>
          <motion.div
            variants={fadeInVariants}
            className="px-[6%] w-full h-auto flex-col flex gap-3"
          >
            <div className="w-full px-3 pt-3 pb-1.5 bg-white border-b border-main-1 justify-between items-end flex">
              <div className="text-center text-black text-2xl font-bold leading-9">
                {ANALYZE_RESULT_TITLE[0]}
              </div>
              <div className="text-center text-gray-1 text-xs flex items-center gap-1 tracking-wide">
                <Icons name={infoIcon} />
                <p>{ANALYZE_RESULT_GUIDE[0]}</p>
              </div>
            </div>
            <div className="pl-10 leading-9 tracking-wide">
              <p>
                <span className="font-bold">1. 위험도 :</span>{' '}
                {analysisData.investmentStyle.riskLevel}
              </p>
              <p>
                <span className="font-bold">2. 거래 패턴 :</span>{' '}
                {analysisData.investmentStyle.tradingPattern}
              </p>
              <p>
                <span className="font-bold">3. 분석 :</span>{' '}
                {analysisData.investmentStyle.analysis}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            className="px-[6%] w-full h-auto flex-col flex gap-3"
          >
            <div className="w-full px-3 pt-3 pb-1.5 bg-white border-b border-main-1 justify-between items-end flex">
              <div className="text-center text-black text-2xl font-bold leading-9">
                {ANALYZE_RESULT_TITLE[1]}
              </div>
              <div className="text-center text-gray-1 text-xs flex items-center gap-1 tracking-wide">
                <Icons name={infoIcon} />
                <p>{ANALYZE_RESULT_GUIDE[1]}</p>
              </div>
            </div>
            <div className="pl-10 leading-9 tracking-wide">
              <p>
                <span className="font-bold">1. 추천 전략 :</span>{' '}
                {analysisData.investmentStrategy.recommendation}
              </p>
              <p>
                <span className="font-bold">2. 리스크 관리 :</span>{' '}
                {analysisData.investmentStrategy.riskManagement}
              </p>
              <p>
                <span className="font-bold">3. 분석 :</span>{' '}
                {analysisData.investmentStrategy.analysis}
              </p>
            </div>
          </motion.div>
        </>
      ) : (
        <div>
          <motion.div
            className="font-bold flex items-center justify-center mt-[100px] tracking-wide text-[20px]"
            variants={fadeInVariants}
          >
            📈 {nickname}님의 제테크 타입을 분석중입니다...
          </motion.div>
          <div className="flex gap-3 justify-center items-center mt-[70px]">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-4 h-4 bg-main-1 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AnalyzeContainer;
