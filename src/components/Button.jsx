import { motion } from "framer-motion";
import { transform } from "zod";

function Button(props) {
    return (
        <motion.button
        initial={{opacity : 0, y : -20}}
        animate={{opacity : 1, y : 0}}
        transition={{duration : 1}}
        whileTap={{scale : 0.95}}
        onClick={props.onClick}
        className="w-[200px] h-[35px]
         border-2 border-white bg-[#2E502E]
          rounded-[12px] text-white font-medium
          cursor-pointer
          hover:bg-green-900">
            {props.children}
        </motion.button>
    )
}

export default Button;