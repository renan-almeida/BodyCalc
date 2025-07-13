import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen flex justify-center ' style={{backgroundColor: "#111315"}}>
      <div className='container flex flex-col items-center relative'>
        <h1 className='text-green-700 font-bold absolute left-6 top-6 text-3xl'>BodyCalc</h1>
        <h1 className='text-white text-2xl font-bold top-16 relative mb-4'>Calculadora de Percentual de gordura</h1>
        <h2 className='text-green-600 top-16 relative font-semibold text-center'>
          Calcule aqui seu  percentual de gordura <br />
           corporal e descubra se é um indivíduo <br />
            saudável! 
        </h2>
        <div className='formContainer'>

        </div>
      </div>
    </div>
  )
}

export default App
