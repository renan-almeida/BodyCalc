import Menu from "../components/Menu"
import Title from "../components/Title"
import Img from "../components/Img"
import bodycalclogotipo from "../assets/bodycalclogotipo.png"
import criadorbodycalc from "../assets/criadorbodycalc.jpeg"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import { motion } from "framer-motion"

function AboutUs() {
    return (
       <div className="w-screen min-h-screen flex justify-center bg-[#111315]">
        <div className="container">
            <Menu />
            <div className="flex flex-col">
                <div >
                    <Img src={bodycalclogotipo} className="h-[300px] relative left-22 top-17"/>
               <Title className="text-white font-semibold text-[20px] top-35
                                 relative justify-center left-[100px] hover:text-[#4B884B] transition duration-500">
                Descubra o seu percentual de <br/> 
                <span className="relative left-[70px]">
                    gordura aqui! 
                </span>
               </Title>
                </div>          
                <motion.div className="border-[#4B884B] border-3 border-solid rounded-2xl w-[594px] h-[410px] flex-col
                                flex bottom-[180px] left-[620px] justify-start relative  bg-[#ffffff10] p-8"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0}}
                                transition={{duration: 0.5, ease: "easeOut"}}>
                    <div>
                         <h3 className="text-[#ADAAAA] hover:text-white transition duration-1000 font-semibold text-[20px] whitespace-pre">
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
            <div className="flex flex-col ">
                <Title className="font-bold text-[80px] text-[#4B884B]
                  relative left-[95px] strokeWhoCreated">
                    Quem criou <br/>a BodyCalc?
                </Title>
                <div className="flex flex-col items-center ">
                     <motion.div whileHover={{ y: -5}} className="border-[#4b884b] border-4 rounded-full w-[200px] h-[200px] 
                relative left-80  overflow-hidden justify-start bottom-50 ">
                            <Img src={criadorbodycalc} className="w-full h-full object-cover object-top rounded-full" />
                    </motion.div>
                    <motion.div whileHover={{ y: -10}}>
                        <Title className="strokeNameCreator text-[#FFFFFF] font-bold left-80  relative text-6xl bottom-50  ">
                            Renan 
                        </Title>
                    </motion.div>
                    <motion.div whileHover={{ y: -10,  }}
                    className="strokeNameCreator text-white font-bold text-[50px] relative left-80 bottom-48">
                        <Title>
                            Almeida Dantas
                        </Title>
                    </motion.div>
                </div>
                <motion.div className="border-3 border-[#4B884B] rounded-2xl w-[594px] h-[423px] 
                                        relative justify-start left-[47px] bottom-80">
                        <Title className="text-[#ADAAAA] hover:text-white  transition duration-1000 
                                        font-semibold text-[20px] justify-center relative m-3 left-12 whitespace-pre">
                            Como praticante de musculação, Renan sempre <br/>
                             buscou bons sites para acompanhar, de forma <br/>
                              frequente, a atualização do seu percentual de <br/>
                               gordura corporal. No entanto, ele encontrava <br/>
                                dificuldades em achar plataformas que fossem <br/>
                                 realmente completas, confiáveis e que oferecessem <br/>
                                  uma boa acessibilidade ao usuário. <br/>
                                Diante disso, surgiu a BodyCalc: uma solução <br/>
                                 simples, rápida e direta, desenvolvida para ajudar <br/>
                                  você a se manter rotineiramente atualizado sobre o <br/>
                                   seu BF corporal, além de proporcionar uma <br/>
                                    experiência muito mais intuitiva e fácil de usar <br/>
                                     quando comparada a outros sites disponíveis.
                        </Title>
                </motion.div>
                <div className=" flex justify-center items-center gap-14 relative left-84 bottom-124">
                   <motion.a whileHover={{ y: -10 }} href="https://www.instagram.com/renixpp/" target="_blank" rel="noopener noreferrer">
                        <Img src={instagram} className="w-[50px] h-[50px] cursor-pointer"/>
                   </motion.a>
                    <motion.a whileHover={{ y: -10 }} href="https://www.linkedin.com/in/renan-almeida-dantas-66baa7338/edit/intro/"
                     target="_blank" rel="noopener noreferrer">
                        <Img src={linkedin} className="w-[50px] h-[50px] cursor-pointer"/>
                    </motion.a>
                   <motion.a whileHover={{y: -10}} href="https://github.com/renan-almeida" target="_blank" rel="noopener noreferrer">
                    <Img src={github} className="w-[50px] h-[50px] cursor-pointer"/>
                    
                   </motion.a>
                    
                    
                </div>
            </div>
            
        </div>
       </div>
    )
}

export default AboutUs;