import Menu from "../components/Menu";
import { motion } from "framer-motion";


function BfTable() {
    return (
         <div className='w-screen min-h-screen flex justify-center ' style={{backgroundColor: "#111315"}}>
            <div className='container flex flex-col items-center relative'>
                <Menu />
                 <h1 className='text-white text-2xl font-bold top-16 relative mb-4'>
                    Tabela de Percentual de Gordura
                </h1>
                <p className="text-[#4B884B] text-[15px] top-14 relative font-medium">
                    A tabela abaixo apresenta os valores de percentual de gordura corporal  para homens e mulheres, <br />
                     de acordo com a classificação da Organização Mundial da Saúde (OMS).
                     <br /> Esses valores são utilizados como referência para avaliar a saúde e o estado físico de um indivíduo.
                </p>
                <div className="formContainer">
                    <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-semibold text-2xl mt-10 text-center">
                        informe o seu sexo abaixo
                    </motion.h1>
                    
                </div>
            </div>
         </div>
    )
}

export default BfTable;