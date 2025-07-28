import Menu from "../components/Menu";
import { motion } from "framer-motion";
import homematleta from "../assets/homematleta.png";
import mulheratleta from "../assets/mulheratleta.png";
import Img from "../components/Img";
import Button from "../components/Button";
import {  useState } from "react";



function BfTable() {
    const [sexo, setSexo] = useState('');

    return (
         <div className='w-screen min-h-screen flex justify-center ' style={{backgroundColor: "#111315"}}>
            <div className='containerTableBf flex flex-col items-center relative'>
                <Menu />
                 <h1 className='text-white text-2xl font-bold top-16 relative mb-4'>
                    Tabela de Percentual de Gordura
                </h1>
                <p className="text-[#4B884B] text-[15px] top-14 relative font-medium">
                    A tabela abaixo apresenta os valores de percentual de gordura corporal  para homens e mulheres, <br />
                     de acordo com a classificação da Organização Mundial da Saúde (OMS).
                     <br /> Esses valores são utilizados como referência para avaliar a saúde e o estado físico de um indivíduo.
                </p>
                <div className="formContainerTable">
                    <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-semibold text-2xl mt-10 text-center">
                        informe o seu sexo abaixo
                    </motion.h1>
                    <div className="flex ml-8 gap-[250px] mt-5">
                        <div className="flex flex-col items-center gap-10">
                            <Img src={homematleta} alt="Homem Atleta" className="h-[450px] top-10 relative" />
                            <Button className="mt-5 relative"
                            variant="outline"
                            onClick={() => setSexo('masculino')}>
                                Masculino
                            </Button>
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
                    {sexo === 'masculino' ? (
                        <motion.table
                        initial={{ opacity: 0,  x: -1000 }}
                        animate={{opacity: 1,  x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="border-collapse border border-white text-white w-[800px] text-center ">
  <thead>
    <tr>
      <th Rowspan="2" className="border-2 border-white px-4 py-2 bg-[#4B884B]">Classificação</th>
      <th Colspan="4" className="border-2 border-white px-4 py-2 bg-[#4B884B]">Percentual de Gordura nos Homens</th>
    </tr>
    <tr>
      <th className="border border-white bg-[#747474] px-4 py-2">20 a 29 anos</th>
      <th className="border border-white bg-[#747474] px-4 py-2">30 a 39 anos</th>
      <th className="border border-white bg-[#747474] px-4 py-2">40 a 49 anos</th>
      <th class="border border-white bg-[#747474] px-4 py-2">50 a 59 anos</th>
    </tr>
  </thead>
  <tbody className="text-[#F1F1F1] text-[18px] font-medium bg-emerald-900">
    <tr className="border border-white px-4 py-2">
      <td className="bg-[#b9b911]">Atleta</td>
      <td className="border">Menos de 11%</td>
      <td className="border">Menos de 12%</td>
      <td className="border">Menos de 14%</td>
      <td className="border  px-4 py-2">Menos de 15%</td>
    </tr>
    <tr className="border border-white  px-4 py-2">
      <td className="border  bg-[#b9b911] px-4 py-2">Bom</td>
      <td className="border  px-4 py-2">11% a 13%</td>
      <td className="border  px-4 py-2">12% a 14%</td>
      <td className="border  px-4 py-2">14% a 16%</td>
      <td className="border  px-4 py-2">15% a 17%</td>
    </tr>
    <tr>
      <td class="border  bg-[#b9b911]">Normal</td>
      <td class="border ">14% a 20%</td>
      <td class="border ">15% a 21%</td>
      <td class="border ">17% a 23%</td>
      <td class="border  px-4 py-2">18% a 24%</td>
    </tr>
    <tr>
      <td class="border  px-4 py-2 bg-[#b9b911]">Elevado</td>
      <td class="border  px-4 py-2">21% a 23%</td>
      <td class="border  px-4 py-2">22% a 24%</td>
      <td class="border  px-4 py-2">24% a 26%</td>
      <td class="border  px-4 py-2">25% a 27%</td>
    </tr>
    <tr>
      <td className="border  px-4 py-2 bg-[#b9b911]">Muito Elevado</td>
      <td className="border  px-4 py-2">Mais de 23%</td>
      <td className="border  px-4 py-2">Mais de 24%</td>
      <td className="border  px-4 py-2">Mais de 26%</td>
      <td className="border  px-4 py-2">Mais de 27%</td>
    </tr>
  </tbody>
</motion.table>

                    ) : (
                        <motion.table
                        initial={{ opacity: 0,  x: -1000 }}
                        animate={{opacity: 1,  x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="border-collapse border border-white text-white w-[800px] text-center">
                            <thead className="text-white ">
                                <tr className="bg-[#4B884B] font-semibold ">
                                <th className="px-4 py-2 border-2 hover:bg-green-900 transition-all duration-200" RowSpan={2}>Classificação</th>
                                <th className="px-4 py-2 border-2 hover:bg-green-900 transition-all duration-200" ColSpan={4}>Percentual de gordura das mulheres</th>
                            </tr>
                            <tr className=" font-medium bg-[#747474]">
                                <th className="border px-4 py-2 hover:bg-gray-600 transition-all duration-500">20 a 29 anos</th>
                                <th className="border px-4 py-2 hover:bg-gray-600 transition-all duration-500">30 a 39 anos</th>
                                <th className="border px-4 py-2 hover:bg-gray-600 transition-all duration-500">40 a 49 anos</th>
                                <th className="border px-4 py-2 hover:bg-gray-600 transition-all duration-500">50 a 59 anos</th>
                            </tr>
                            </thead>
                            <tbody className="bg-emerald-900 text-[#F1F1F1] text-[18px] font-medium text-center">
                                <tr className="border border-white px-4 py-2">
                                    <td className="bg-[#b9b911] px-4 py-2">Atleta</td>
                                    <td className="border px-4 py-2">Menos de 11%</td>
                                    <td className="border px-4 py-2">Menos de 12%</td>
                                    <td className="border px-4 py-2">Menos de 14%</td>
                                    <td className="border  px-4 py-2">Menos de 15%</td>
                                </tr>
                                <tr className="border border-white  px-4 py-2">
                                    <td className="border  bg-[#b9b911] px-4 py-2">Bom</td>
                                    <td className="border  px-4 py-2">11% a 13%</td>
                                    <td className="border  px-4 py-2">12% a 14%</td>
                                    <td className="border  px-4 py-2">14% a 16%</td>
                                    <td className="border  px-4 py-2">15% a 17%</td>
                                </tr>
                                        <tr>
                                        <td className="border  bg-[#b9b911] px-4 py-2">Normal</td>
                                        <td className="border px-4 py-2">14% a 20%</td>
                                        <td className="border px-4 py-2">15% a 21%</td>
                                        <td className="border px-4 py-2">17% a 23%</td>
                                        <td className="border  px-4 py-2">18% a 24%</td>
                                        </tr>
                                        <tr>
                                        <td class="border  px-4 py-2 bg-[#b9b911]">Elevado</td>
                                        <td class="border  px-4 py-2">21% a 23%</td>
                                        <td class="border  px-4 py-2">22% a 24%</td>
                                        <td class="border  px-4 py-2">24% a 26%</td>
                                        <td class="border  px-4 py-2">25% a 27%</td>
                                        </tr>
                                        <tr>
                                        <td className="border  px-4 py-2 bg-[#b9b911]">Muito Elevado</td>
                                        <td className="border  px-4 py-2">Mais de 23%</td>
                                        <td className="border  px-4 py-2">Mais de 24%</td>
                                        <td className="border  px-4 py-2">Mais de 26%</td>
                                        <td className="border  px-4 py-2">Mais de 27%</td>
                                        </tr>
                                </tbody>
                            </motion.table>
                        )}
                    </div>
                </div>
            </div>
         </div>
    )
}

export default BfTable;