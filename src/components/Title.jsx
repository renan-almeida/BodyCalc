import { motion } from "framer-motion";

function Title (props) { 
    return (
        <motion.h1 className={props.className}
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
            {props.children}
        </motion.h1>
    );
}

export default Title;