'use client';

import { motion } from 'framer-motion';
import MainDownLeft from './left/MainDownLeft';
import MainHeader from './MainHeader';
import MainDownRight from './right/MainDownRight';

const MainContainer = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const staggerContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="w-full flex-col-center pb-20 gap-y-20"
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeInVariants}>
        <MainHeader />
      </motion.div>
      <motion.div className="flex gap-x-16" variants={fadeInVariants}>
        <div>
          <MainDownLeft />
        </div>
        <div>
          <MainDownRight />
        </div>
      </motion.div>
    </motion.div>
  );
};
export default MainContainer;
