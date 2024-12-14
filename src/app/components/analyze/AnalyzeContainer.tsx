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
    visible: { opacity: 1, y: 0 },
  };

  const [nickname, setNickname] = useState<string>('');
  const [analysisData, setAnalysisData] = useState<any>(null);

  // Fetch user nickname
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

  // Fetch analysis data
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
          {/* Investment Style */}
          <motion.div
            variants={fadeInVariants}
            className="px-[6%] w-full h-auto flex-col flex gap-3"
          >
            <div className="w-full px-3 pt-3 pb-1.5 bg-white border-b border-main-1 justify-between items-end flex">
              <div className="text-center text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
                {ANALYZE_RESULT_TITLE[0]}
              </div>
              <div className="text-center text-gray-1 text-xs flex items-center gap-1 tracking-wide">
                <Icons name={infoIcon} />
                <p>{ANALYZE_RESULT_GUIDE[0]}</p>
              </div>
            </div>
            <div className="pl-10 leading-9">
              <p>위험도: {analysisData.investmentStyle.riskLevel}</p>
              <p>거래 패턴: {analysisData.investmentStyle.tradingPattern}</p>
              <p>분석: {analysisData.investmentStyle.analysis}</p>
            </div>
          </motion.div>

          {/* Investment Strategy */}
          <motion.div
            variants={fadeInVariants}
            className="px-[6%] w-full h-auto flex-col flex gap-3"
          >
            <div className="w-full px-3 pt-3 pb-1.5 bg-white border-b border-main-1 justify-between items-end flex">
              <div className="text-center text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">
                {ANALYZE_RESULT_TITLE[1]}
              </div>
              <div className="text-center text-gray-1 text-xs flex items-center gap-1 tracking-wide">
                <Icons name={infoIcon} />
                <p>{ANALYZE_RESULT_GUIDE[1]}</p>
              </div>
            </div>
            <div className="pl-10 leading-9">
              <p>추천 전략: {analysisData.investmentStrategy.recommendation}</p>
              <p>
                리스크 관리: {analysisData.investmentStrategy.riskManagement}
              </p>
              <p>분석: {analysisData.investmentStrategy.analysis}</p>
            </div>
          </motion.div>
        </>
      ) : (
        <p className="text-center mt-10 text-gray-500">
          분석 데이터를 불러오는 중...
        </p>
      )}
    </motion.div>
  );
};

export default AnalyzeContainer;
