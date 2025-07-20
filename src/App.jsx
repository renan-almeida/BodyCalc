import { useState } from 'react'
import './App.css'
import TitleInput from './components/TitleInput'
import Input from './components/Input'
import Select from './components/Select'
import { Calendar, Ruler, Venus, Weight } from 'lucide-react'
import Button from './components/Button'
import { motion } from 'framer-motion'

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
      </div>
    </div>
      <div className="flex flex-col items-center">
        <TitleInput className="mb-2">Idade:</TitleInput>
        <div className="flex items-center">
          <Calendar size={24} color="#4B884B" className="mr-2" />
          <Input type="number" placeholder="Digite sua idade" value={idade} setValue={setIdade} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <TitleInput className="mb-2">Altura (cm):</TitleInput>
        <div className="flex items-center">
          <Ruler size={24} color="#4B884B" className="mr-2" />
          <Input type="number" placeholder="Digite sua altura" value={altura} setValue={setAltura} />
        </div>
      </div>
    </div>
    <div className='flex items-center justify-center gap-12'>
      <div className='flex flex-col items-center'>
        <TitleInput className="mb-2 top-[16px] relative">
          Peso (kg):
        </TitleInput>
        <div className='flex items-center top-[16px] relative'>
          <Weight size={24} color="#4B884B" className="mr-2"/>
          <Input type='number' placeholder='Digite o seu peso' value={peso} setValue={setPeso} />
        </div>
      </div>  
      <div className='flex flex-col items-center'>
        <TitleInput className='mb-2 top-[16px] relative'>
          Pescoço (cm):
        </TitleInput>
        <div className='flex items-center top-[16px] relative'>
          <Ruler size={24} color="#4B884B" className="mr-2" />
          <Input type='number' placeholder='' value={pescoco} setValue={setPescoco} />
        </div>
      </div>
            {sexo == 'Masculino' ? (
        <div className='flex flex-col items-center'>
          <TitleInput className='mb-2 top-[16px] relative'>
            Abdomên (cm):
          </TitleInput>
          <div className='flex items-center top-[16px] relative'>
            <Ruler size={24} color="#4B884B" className="mr-2" />
            <Input type='number' placeholder='' value={abdomen} setValue={setAbdomen} />
          </div>
      </div>
            ) : (
              <>
               <div className='flex flex-col items-center'>
          <TitleInput className='mb-2 top-[16px] relative'>
            Cintura (cm):
          </TitleInput>
          <div className='flex items-center top-[16px] relative'>
            <Ruler size={24} color="#4B884B" className="mr-2" />
            <Input type='number' placeholder='' value={cintura} setValue={setCintura} />
          </div>
        </div>
              <div className='flex flex-col items-center'>
          <TitleInput className='mb-2 top-[16px] relative'>
            Quadril (cm):
          </TitleInput>
          <div className='flex items-center top-[16px] relative'>
            <Ruler size={24} color="#4B884B" className="mr-2" />
            <Input type='number' placeholder='' value={quadril} setValue={setQuadril} />
          </div>
        </div>
        </>
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
    </div>
  </div>
</div>
  )
}

export default App
