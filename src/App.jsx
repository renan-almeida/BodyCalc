
import Form from './components/Form'
import Menu from './components/Menu'
import Title from "./components/Title"
function App() {
  return (
    <div className='w-screen min-h-screen flex justify-center ' style={{backgroundColor: "#111315"}}>
      <div className='container flex flex-col items-center relative'>
        <Menu />
        <Title className='text-white text-2xl font-bold top-16 relative mb-4'>
          Calculadora de Percentual de gordura
          </Title>
        <Title className='text-[#4B884B] top-16 relative font-semibold text-center'>
          Calcule aqui seu  percentual de gordura <br />
           corporal e descubra se é um indivíduo <br />
            saudável! 
        </Title>
        <Form />

  </div>
</div>
  )
}

export default App
