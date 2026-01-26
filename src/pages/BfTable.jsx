import Menu from "../components/Menu";
import { motion } from "framer-motion";
import Title from "../components/Title"
import homematletabodycalc from "../assets/homematletabodycalc.png";
import mulheratleta from "../assets/mulheratleta.png";
import Img from "../components/Img";
import Button from "../components/Button";
import {  useState } from "react";
import bodycalclogotipo from "../assets/bodycalclogotipo.png"
import Portfolio from "../components/Portfolio";



function BfTable() {
    const [sexo, setSexo] = useState('');

    return (
         <div className='w-screen min-h-screen flex justify-center ' style={{backgroundColor: "#111315"}}>
            <div className='containerTableBf flex flex-col items-center relative'>
                <Menu />
                 <Title className='text-white text-2xl font-bold top-16 relative mb-4'>
                    Tabela de Percentual de Gordura
                </Title>
                <Title className="text-[#4B884B] text-[15px] top-14 relative font-medium">
                    A tabela abaixo apresenta os valores de percentual de gordura corporal  para homens e mulheres, <br />
                     de acordo com a classificação da Organização Mundial da Saúde (OMS).
                     <br /> Esses valores são utilizados como referência para avaliar a saúde e o estado físico de um indivíduo.
                </Title>
                <div className="formContainerTable">
                    <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-semibold text-2xl mt-10 text-center">
                        informe o seu sexo abaixo
                    </motion.h1>
                    <div className="flex ml-8 gap-20 mt-5 relative">
                        <div className="flex flex-col items-center gap-10">
                            <Img src={homematletabodycalc} alt="Homem Atleta" className="h-[450px] top-10 relative" />
                            <Button className="mt-5 relative"
                            variant="outline"
                            onClick={() => setSexo('masculino')}>
                                Masculino
                            </Button>
                        </div>
                        <div className="flex justify-center items-center relative bottom-10 right-10 ">
                            <Img src={bodycalclogotipo} className="h-[100px] w-[100px]" />
                        </div>
                        <div className="flex flex-col items-center gap-10">
                            <Img src={mulheratleta} alt="Mulher Atleta" className="h-[450px] top-10 relative" />
                            <Button className="mt-5 relative" variant="outline" onClick={() => setSexo('feminino')}>
                                Feminino
                            </Button>
                        </div>
                    </div>
                    <div
                     className="mt-12 gap-5 flex items-center justify-center">
                    {sexo === 'masculino' && (
                        <motion.table
                        initial={{ opacity: 0,  x: -1000 }}
                        animate={{opacity: 1,  x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="border-collapse border border-white text-white w-[800px] text-center ">
  <thead>
    <tr>
      <th rowSpan="2" className="border-2 border-white px-4 py-2 bg-[#4B884B] hover:bg-green-900 transition-all duration-200">Classificação</th>
      <th colSpan="4" className="border-2 border-white px-4 py-2 bg-[#4B884B] hover:bg-green-900 transition-all duration-200">Percentual de Gordura nos Homens</th>
    </tr>
    <tr>
      <th className="border border-white bg-[#747474] px-4 py-2 hover:bg-gray-600 transition-all duration-500">20 a 29 anos</th>
      <th className="border border-white bg-[#747474] px-4 py-2 hover:bg-gray-600 transition-all duration-500">30 a 39 anos</th>
      <th className="border border-white bg-[#747474] px-4 py-2 hover:bg-gray-600 transition-all duration-500">40 a 49 anos</th>
      <th className="border border-white bg-[#747474] px-4 py-2 hover:bg-gray-600 transition-all duration-500">50 a 59 anos</th>
    </tr>
  </thead>
  <tbody className="text-[#F1F1F1] text-[18px] font-medium bg-emerald-900">
    <tr className="border border-white px-4 py-2">
      <td className="bg-[#b9b911] hover:bg-[#92920e] transition-all duration-500">Atleta</td>
      <td className="border px-4 py-2 hover:bg-emerald-950 transition-all duration-500">Menos de 11%</td>
      <td className="border hover:bg-emerald-950 transition-all duration-500">Menos de 12%</td>
      <td className="border hover:bg-emerald-950 transition-all duration-500">Menos de 14%</td>
      <td className="border hover:bg-emerald-950 transition-all duration-500">Menos de 15%</td>
    </tr>
    <tr className="border border-white  px-4 py-2">
      <td className="border  bg-[#b9b911] px-4 py-2 hover:bg-[#92920e] transition-all duration-500">Bom</td>
      <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">11% a 13%</td>
      <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">12% a 14%</td>
      <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">14% a 16%</td>
      <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">15% a 17%</td>
    </tr>
    <tr>
      <td className="border  bg-[#b9b911] hover:bg-[#92920e] transition-all duration-500">Normal</td>
      <td className="border px-4 py-2  hover:bg-emerald-950 transition-all duration-500">14% a 20%</td>
      <td className="border  hover:bg-emerald-950 transition-all duration-500">15% a 21%</td>
      <td className="border  hover:bg-emerald-950 transition-all duration-500">17% a 23%</td>
      <td className="border  hover:bg-emerald-950 transition-all duration-500">18% a 24%</td>
    </tr>
    <tr>
      <td class="border  px-4 py-2 bg-[#b9b911] hover:bg-[#92920e] transition-all duration-500">Elevado</td>
      <td class="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">21% a 23%</td>
      <td className="border  hover:bg-emerald-950 transition-all duration-500">22% a 24%</td>
      <td className="border  hover:bg-emerald-950 transition-all duration-500">24% a 26%</td>
      <td className="border hover:bg-emerald-950 transition-all duration-500">25% a 27%</td>
    </tr>
    <tr>
      <td className="border  px-4 py-2 bg-[#b9b911] hover:bg-[#92920e] transition-all duration-500">Muito Elevado</td>
      <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">Mais de 23%</td>
      <td className="border   hover:bg-emerald-950 transition-all duration-500">Mais de 24%</td>
      <td className="border   hover:bg-emerald-950 transition-all duration-500">Mais de 26%</td>
      <td className="border   hover:bg-emerald-950 transition-all duration-500">Mais de 27%</td>
    </tr>
  </tbody>
</motion.table>

                    )} {sexo === 'feminino' && (
                        <motion.table
                        initial={{ opacity: 0,  x: -1000 }}
                        animate={{opacity: 1,  x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="border-collapse border border-white text-white w-[800px] text-center">
                            <thead className="text-white ">
                                <tr className="bg-[#4B884B] font-semibold ">
                                <th className="px-4 py-2 border-2 hover:bg-green-900 transition-all duration-200" rowSpan={2}>Classificação</th>
                                <th className="px-4 py-2 border-2 hover:bg-green-900 transition-all duration-200" colSpan={4}>Percentual de gordura das mulheres</th>
                            </tr>
                            <tr className=" font-medium bg-[#747474]">
                                <th className="border px-4 py-2 hover:bg-gray-600 transition-all duration-500">20 a 29 anos</th>
                                <th className="border px-4 py-2 hover:bg-gray-600 transition-all duration-500">30 a 39 anos</th>
                                <th className="border px-4 py-2 hover:bg-gray-600 transition-all duration-500">40 a 49 anos</th>
                                <th className="border px-4 py-2 hover:bg-gray-600 transition-all duration-500">50 a 59 anos</th>
                            </tr>
                            </thead>
                            <tbody className="bg-emerald-900  text-[#F1F1F1] text-[18px] font-medium text-center">
                                <tr className="border border-white px-4 py-2">
                                    <td className="bg-[#b9b911] px-4 py-2 hover:bg-[#92920e] transition-all duration-500">Atleta</td>
                                    <td className="border px-4 py-2 hover:bg-emerald-950 transition-all duration-500">Menos de 11%</td>
                                    <td className="border px-4 py-2 hover:bg-emerald-950 transition-all duration-500">Menos de 12%</td>
                                    <td className="border px-4 py-2 hover:bg-emerald-950 transition-all duration-500">Menos de 14%</td>
                                    <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">Menos de 15%</td>
                                </tr>
                                <tr className="border border-white  px-4 py-2">
                                    <td className="border  bg-[#b9b911] px-4 py-2 hover:bg-[#92920e] transition-all duration-500">Bom</td>
                                    <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">11% a 13%</td>
                                    <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">12% a 14%</td>
                                    <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">14% a 16%</td>
                                    <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">15% a 17%</td>
                                </tr>
                                        <tr>
                                        <td className="border  bg-[#b9b911] px-4 py-2 hover:bg-[#92920e] transition-all duration-500">Normal</td>
                                        <td className="border px-4 py-2 hover:bg-emerald-950 transition-all duration-500">14% a 20%</td>
                                        <td className="border px-4 py-2 hover:bg-emerald-950 transition-all duration-500">15% a 21%</td>
                                        <td className="border px-4 py-2 hover:bg-emerald-950 transition-all duration-500">17% a 23%</td>
                                        <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">18% a 24%</td>
                                        </tr>
                                        <tr>
                                        <td className="border  px-4 py-2 bg-[#b9b911] hover:bg-[#92920e] transition-all duration-500">Elevado</td>
                                        <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">21% a 23%</td>
                                        <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">22% a 24%</td>
                                        <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">24% a 26%</td>
                                        <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">25% a 27%</td>
                                        </tr>
                                        <tr>
                                        <td className="border  px-4 py-2 bg-[#b9b911] hover:bg-[#92920e] transition-all duration-500">Muito Elevado</td>
                                        <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">Mais de 23%</td>
                                        <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">Mais de 24%</td>
                                        <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">Mais de 26%</td>
                                        <td className="border  px-4 py-2 hover:bg-emerald-950 transition-all duration-500">Mais de 27%</td>
                                        </tr>
                                </tbody>
                            </motion.table>
                        )}
                    </div>
                    <div className="justify-center flex">
                        <Portfolio />
                    </div>
                </div>
            </div>
         </div>
    )
}

export default BfTable;