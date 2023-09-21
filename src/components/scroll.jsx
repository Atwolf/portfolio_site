import { motion } from "framer-motion";

import { Button } from "@material-tailwind/react";

const Scroll = ({svgData, rounded="rounded-none"}) => {
    return (
        <div className={`bg-coffee mx-auto flex items-center ${rounded}`}>
        
        <Button 
            className={`w-full`}
            onClick={() => {
                window.scrollTo(0,0);
            }}
        >
        <motion.div
            animate={{
                y: [0,-5,0]
        }}
        transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: "easeInOut"
        }}
        >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 mx-auto items-center"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={svgData}
                />
                </svg>
            </motion.div>    
        </Button>
    </div>
    )
}

export default Scroll;