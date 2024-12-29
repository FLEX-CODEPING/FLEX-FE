'use client';

import { motion } from 'framer-motion';
import SearchPost from './SearchPost';

interface ResultsProps {
  results: SearchPostTypes[];
  searchExecuted: boolean;
  totalResults: number;
}

const Results: React.FC<ResultsProps> = ({
  results,
  searchExecuted,
  totalResults,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full overflow-x-hidden"
    >
      {/* 검색 결과 개수 */}
      {searchExecuted && totalResults > 0 && (
        <div className="flex justify-center mt-[15px] text-[17px] mb-[24px]">
          <p>
            총 <span className="font-bold">{totalResults}</span>개의 포스트를
            찾았습니다.
          </p>
        </div>
      )}

      {/* 검색 결과 리스트 */}
      {searchExecuted && totalResults > 0 && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[28px] gap-y-[20px] ml-8 p-4"
          variants={containerVariants}
        >
          {results.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="search-post"
            >
              <SearchPost key={post.id} post={post} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Results;
