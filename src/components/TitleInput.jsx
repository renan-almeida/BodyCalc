import { motion } from "framer-motion"


function TitleInput(props) {
    return (
        <motion.h1 animate={{opacity: 1}} initial={{ opacity: 0 }} transition={{duration: 1.5}}
        className={`${props.className ? props.className : ""} text-[#ADAAAA] font-semibold`}>
            {props.children}
        </motion.h1>
    )
};

export default TitleInput