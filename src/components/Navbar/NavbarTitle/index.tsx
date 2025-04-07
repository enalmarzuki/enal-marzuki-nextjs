import { motion } from 'motion/react';

const NavbarTitle = () => {
  return (
    <motion.p
      className='font-itim text-xl font-normal'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      EnalMarzuki.
    </motion.p>
  );
};

export default NavbarTitle;
