import { motion } from "framer-motion"
import "../App.css"


function Input(props) {
    return (
        <motion.input
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1}}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
            className={`${props.className ? props.className : ""}
             h-[30px] w-[200px]
              rounded-md text-[#ADAAAA]
               font-medium text-center
               placeholder-[#ADAAAA]`}>
        </motion.input>
    )
}

export default Input