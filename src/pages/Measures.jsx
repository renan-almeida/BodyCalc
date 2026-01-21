import Menu from "../components/Menu";
import {motion} from "framer-motion";
import Title from "../components/Title";
import peso from "../assets/peso.png";
import altura from "../assets/altura.png";
import abdomen from "../assets/abdomen.png"
import pescoco from "../assets/pescoco.png";
import cintura from "../assets/cintura.png";
import quadril from "../assets/quadril.png";
import Img from "../components/Img";
import Button from "../components/Button";

function Measures() {
    return (
            <div className='w-screen min-h-screen flex justify-center ' style={{backgroundColor: "#111315"}}>
                <div className='containerTableBf flex flex-col items-center relative'>
                    <Menu />
                    
                    <Title className='text-white text-[24px] font-bold top-16 relative mb-4'>
                        Não sabe como tirar suas medidas?
                </Title>
                <Title className="text-[#4B884B] text-[15px] top-14 relative font-medium justify-center text-center">
                    Temos um guia pronto para você utilizar <br />
                        e tirar suas medidas corretamente! 
                     <br />
                      <span className='top-2 relative'>
                        Veja abaixo:
                    </span>
                </Title>
                <div className='formContainerTable'>
                    <motion.p className="text-[#4B884B] text-[20px] font-bold mt-4 text-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}>
                        BodyCalc
                    </motion.p>
                    <motion.h1 className="text-white text-[32px] font-bold mt-4 text-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}>
                            Guia de Medidas
                    </motion.h1>
                    <div className='flex justify-center gap-21'>
                        <div className='mt-9 flex flex-col items-center gap-10 '>
                            <Img src={peso} alt="Como medir o peso" className="h-[225px] top-10  relative " />
                            <Button>Peso</Button>
                        </div>
                        <div className='mt-9 flex flex-col items-center gap-10 '>
                            <Img src={altura} alt="Como medir a altura" className="h-[225px] top-10 relative" />
                            <Button>Altura</Button>
                        </div>
                        <div className="flex flex-col gap-10 mt-9 items-center">
                            <Img src={abdomen} alt="Como medir o abdomen" className="h-[225px] top-10 relative " />
                            <Button>Abdômen</Button>
                        </div> 
                    </div>
                    <div className=" flex items-center justify-center mt-10 gap-21">
                            <div className="gap-22 flex flex-col items-center">
                                <Img src={pescoco} alt="Como medir o pescoço" className="h-[225px] top-15 relative" />
                                <Button>Pescoço</Button>
                            </div>
                            <div className="gap-13 flex flex-col items-center">
                                <Img src={cintura} alt="Como medir a cintura" className="h-[265px] top-10 relative" />
                                <Button>Cintura</Button>
                            </div>
                            <div className="flex flex-col items-center gap-20">
                                <Img src={quadril} alt="Como medir o quadril" className="h-[200px] top-10 relative mt-9"/>
                                <Button>Quadril</Button>
                            </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Measures;