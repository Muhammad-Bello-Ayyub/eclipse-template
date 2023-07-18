import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';

const Logo = () => {
    return (
        <Link to="/">
            <motion.div
                whileHover={{ 
                    rotate: 360,
                    transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                    },
                }}
            >
                <Image 
                    cursor="pointer"
                    src="/logo.png"
                    boxSize="full"
                />
            </motion.div> 
        </Link>
    );
};

export default Logo;