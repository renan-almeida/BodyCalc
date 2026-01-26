import { Github } from 'lucide-react';

function Portfolio() {
 return (
    <div className='bottom-0 left-0 m-4 flex flex-col
                   text-white font-semibold text-[12px] relative
                   '>
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
 )
}

export default Portfolio;