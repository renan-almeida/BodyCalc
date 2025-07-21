import { useState } from 'react'
import './App.css'
import TitleInput from './components/TitleInput'
import Input from './components/Input'
import Select from './components/Select'
import { Calendar, Ruler, Venus, Weight, Info, Asterisk, Github } from 'lucide-react'
import Button from './components/Button'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'

function App() {
  const [count, setCount] = useState(0)
  const [sexo, setSexo] = useState('Masculino')
  const [idade, setIdade] = useState('')
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [pescoco, setPescoco] = useState('')
  const [abdomen, setAbdomen] = useState('')
  const [cintura, setCintura] = useState('')
  const [quadril, setQuadril] = useState('')
  const [resultado, setResultado] = useState('')

function CleanValues() {
  setIdade('');
  setAltura('');
  setPeso('');
  setPescoco('');
  setAbdomen('');
  setCintura('');
  setQuadril('');
}

function BfCalculation(sexo, idade, altura, peso, pescoco, abdomen, cintura, quadril) {
  if(
      !sexo 
    || !idade 
    ||  !altura 
    || !peso 
    || !pescoco 
    || (sexo == 'Masculino' && !abdomen) 
    || (sexo == 'Feminino' && (!cintura || !quadril)))
  {
    return alert('Preencha todos os campos!')
  }
  if(Number(idade) <= 0 ||
   Number(altura) <= 0 ||
    Number(peso) <= 0 ||
     Number(pescoco) <= 0 ||
      (sexo == 'Masculino' && Number(abdomen) <= 0) ||
       (sexo == 'Feminino' && (Number(cintura) <= 0 || Number(quadril) <= 0)
      )) {
    return alert('Preencha os campos com valores válidos!')
  }

  let bf = 0;

  if(sexo == 'Masculino') {
    bf = 86.010 * Math.log10(abdomen - pescoco) - 70.041 * Math.log10(altura) + 36.76;
  } else if (sexo == 'Feminino') {
    bf = 163.205 * Math.log10(cintura + quadril - pescoco) - 97.684 * Math.log10(altura) - 78.387;
  }

  return setResultado(`${bf.toFixed(2)}%`);
}
  return (
    <div className='w-screen min-h-screen flex justify-center ' style={{backgroundColor: "#111315"}}>
      <div className='container flex flex-col items-center relative'>
        <h1 className='text-white text-2xl font-bold top-16 relative mb-4'>Calculadora de Percentual de gordura</h1>
        <h2 className='text-[#4B884B] top-16 relative font-semibold text-center'>
          Calcule aqui seu  percentual de gordura <br />
           corporal e descubra se é um indivíduo <br />
            saudável! 
        </h2>
        <div className="formContainer flex flex-col items-center justify-center relative">
      <motion.h1 className='text-[#4B884B] font-bold absolute  top-12 text-[40px]'
       initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      >BodyCalc
      </motion.h1>
  <h1 className='text-[#f1f1f1] text-center text-[16px] font-bold  mb-8'>
    Preencha abaixo algumas <br />
    informações a respeito de você 
  </h1>
  <div className="flex items-center justify-center gap-12">
    <div className="flex flex-col items-center">
      <TitleInput className="mb-2">Selecione o sexo:</TitleInput>
      <div className="flex items-center">
        <Venus size={24} color="#4B884B" className="mr-2" />
        <Select value={sexo} setValue={setSexo}/>
        <span
          title='campo obrigatório'
          className='ml-1 text-red-500'>
          <Asterisk size={18} color='#4B884B' className="ml-1 text-red-500" />
          </span>
      </div>
    </div>
      <div className="flex flex-col items-center">
        <TitleInput className="mb-2">Idade:</TitleInput>
        <div className="flex items-center">
          <Calendar size={24} color="#4B884B" className="mr-2" />
          <Input type="number" min="1" placeholder="Digite sua idade" value={idade} setValue={setIdade} />
          <span
          title='campo obrigatório'
          className='ml-1 text-red-500'>
          <Asterisk size={18} color='#4B884B' className="ml-1 text-red-500" />
          </span>
          
        </div>
      </div>
      <div className="flex flex-col items-center">
        <TitleInput className="mb-2">Altura (cm):</TitleInput>
        <div className="flex items-center">
          <Ruler size={24} color="#4B884B" className="mr-2" />
          <Input type="number" min="1" placeholder="Digite sua altura" value={altura} setValue={setAltura} />
          <span
            title='Medida da altura deve ser feita descalço e encostado na parede.'
            className='ml-2 cursor-help'>
              <Info size={16} color='#4B884B' />
          </span>
        </div>
      </div>
    </div>
    {/* Substitua a seção atual dos inputs da segunda linha por algo como: */}
<div className='flex flex-col items-center'>
  {/* Primeira linha: Peso, Pescoço e (se Masculino) Abdômen ou (se Feminino) Cintura */}
  <div className='flex items-center justify-center gap-12'>
    <div className='flex flex-col items-center'>
      <TitleInput className="mb-2 top-[16px] relative">
        Peso (kg):
      </TitleInput>
      <div className='flex items-center top-[16px] relative'>
        <Weight size={24} color="#4B884B" className="mr-2"/>
        <Input type='number' min="1" placeholder='Digite o seu peso' value={peso} setValue={setPeso} />
        <span
          title='Medida do peso deve ser feita com a balança.'
          className='ml-2 cursor-help'>
            <Info size={16} color='#4B884B' />
        </span>
      </div>
    </div>  
    <div className='flex flex-col items-center'>
      <TitleInput className='mb-2 top-[16px] relative'>
        Pescoço (cm):
      </TitleInput>
      <div className='flex items-center top-[16px] relative'>
        <Ruler size={24} color="#4B884B" className="mr-2" />
        <Input type='number' min="1" placeholder='' value={pescoco} setValue={setPescoco} />
        <span
          title='Medida do pescoço deve ser feita na altura do meio do pescoço.'
          className='ml-2 cursor-help'>
            <Info size={16} color='#4B884B' />
        </span>
      </div>
    </div>
    {sexo === 'Masculino' ? (
      <div className='flex flex-col items-center'>
        <TitleInput className='mb-2 top-[16px] relative'>
          Abdômen (cm):
        </TitleInput>
        <div className='flex items-center top-[16px] relative'>
          <Ruler size={24} color="#4B884B" className="mr-2" />
          <Input type='number' min="1" placeholder='' value={abdomen} setValue={setAbdomen} />
          <span
            title='Medida do abdômen deve ser feita na altura do umbigo, com o abdômen relaxado.'
            className='ml-2 cursor-help'>
              <Info size={16} color='#4B884B' />
          </span>
        </div>
      </div>
    ) : (
      <div className='flex flex-col items-center'>
        <TitleInput className='mb-2 top-[16px] relative'>
          Cintura (cm):
        </TitleInput>
        <div className='flex items-center top-[16px] relative'>
          <Ruler size={24} color="#4B884B" className="mr-2" />
          <Input type='number' min="1" placeholder='' value={cintura} setValue={setCintura} />
          <span
            title='Medida da circunferência da cintura deve ser feita na altura do umbigo.'
            className='ml-2 cursor-help'>
              <Info size={16} color='#4B884B' />
          </span>
        </div>
      </div>
    )}
  </div>
  {/* Segunda linha para Quadril somente para o sexo Feminino */}
  {sexo === 'Feminino' && (
    <div className='flex items-center justify-center gap-12 mt-4'>
      <div className='flex flex-col items-center'>
        <TitleInput className='mb-2 top-[16px] relative'>
          Quadril (cm):
        </TitleInput>
        <div className='flex items-center top-[16px] relative'>
          <Ruler size={24} color="#4B884B" className="mr-2" />
          <Input type='number' min="1" placeholder='' value={quadril} setValue={setQuadril} />
          <span
            title='Medida do quadril deve ser feita na altura do ponto mais largo do quadril.'
            className='ml-2 cursor-help'>
              <Info size={16} color='#4B884B' />
          </span>
        </div>
      </div>
    </div>
  )}
</div>
    <div className='flex items-center gap-[85px] top-16 relative'>
    <Button onClick={() => BfCalculation(sexo, idade, altura, peso, pescoco, abdomen, cintura, quadril)}>
      Calcular
    </Button>
    <Button onClick={CleanValues}>
      Limpar valores
    </Button>
    </div>
    {resultado && (
      <motion.div className=' items-center text-center top-25 relative'
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{ duration: 0.6, ease: "easeOut" }}>
        <p className=' text-white font-bold'>O seu percentual de gordura atual é de:</p>
        <h1 className='text-white font-bold top-3 relative text-3xl'>{resultado}</h1>
      </motion.div>
    )}
    <div className='absolute bottom-0 left-0 m-4 flex flex-col text-white font-semibold text-[12px] '>
      <p>Desenvolvido por:  
        <span className='text-[#4B884B] font-bold ml-1'>
        Renan Almeida
      </span>
      </p>
      <div className='flex '>
        <Github size={24} color="#4B884B" />
        <a href="https://github.com/renan-almeida" target="_blank" 
          className='ml-2 top-0.5 relative text-[12px]'>
          renan-almeida
        </a>
      </div>
    </div>
    </div>
  </div>
</div>
  )
}

export default App
