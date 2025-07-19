import { motion } from "framer-motion";
import '../App.css'

function Select(props) {
    return (
        <motion.select
            initial={{ opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1.5}}
            className={`${props.className ? props.className : ""}
             h-[30px] w-[200px] rounded-md text-[#ADAAAA] text-center
             font-medium 
              focus:bg-[#222]`}
              value={props.sexo}
              onChange={(e) => props.setSexo(e.target.value)}>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
        </motion.select>
    )
}

export default Select;