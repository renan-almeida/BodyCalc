import Menu from "../components/Menu"
import Title from "../components/Title"
import Img from "../components/Img"
import bodycalclogotipo from "../assets/bodycalclogotipo.png"
import { motion } from "framer-motion"

function AboutUs() {
    return (
       <div className="w-screen min-h-screen flex justify-center bg-[#111315]">
        <div className="container">
            <Menu />
            <div className="flex flex-col">
                <div>
                    <Img src={bodycalclogotipo} className="h-[300px] relative left-22 top-17"/>
               <Title className="text-white font-semibold text-[20px] top-35
                                 relative justify-center left-[100px]">
                Descubra o seu percentual de <br/> 
                <span className="relative left-[70px]">
                    gordura aqui! 
                </span>
               </Title>
                </div>          
                <motion.div className="border-white border-2 border-solid rounded-2xl w-[594px] h-[410px] flex-col
                                flex bottom-[180px] left-[620px] justify-start relative  bg-[#ffffff10] p-8"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0}}
                                transition={{duration: 0.5, ease: "easeOut"}}>
                    <div>
                         <h3 className="text-[#ADAAAA] font-semibold text-[20px] whitespace-pre">
                    Você já teve dúvidas sobre como está o seu corpo? <br />
                    Aquela “pochetezinha” pode realmente <br /> fazer algum mal à sua saúde? <br />
                    Pensando nisso, o Dev Renan Almeida Dantas <br />
                     projetou e desenvolveu a BodyCalc — um site criado <br />
                      para te auxiliar no dia a dia. Com ele, você pode <br />
                       calcular seu BF (Body Fat), consultar tabelas de <br />
                        medidas para entender sua situação atual, acessar <br />
                         guias de medição e muito mais. <br />
                        A BodyCalc é uma ferramenta prática e acessível <br />
                         para quem deseja acompanhar sua evolução <br />
                          corporal e cuidar melhor da própria saúde. 
                   </h3>
                    </div>
                  
                </motion.div>
            </div>
            
        </div>
       </div>
    )
}

export default AboutUs;