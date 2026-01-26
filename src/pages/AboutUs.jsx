import Menu from "../components/Menu"
import Title from "../components/Title"
import Img from "../components/Img"
import bodycalclogotipo from "../assets/bodycalclogotipo.png"

function AboutUs() {
    return (
       <div className="w-screen min-h-screen flex justify-center bg-[#111315]">
        <div className="container">
            <Menu />
            <div>
                <Img src={bodycalclogotipo} className="h-[300px] relative left-22 top-17"/>
               <Title className="text-white font-semibold text-[20px] top-18
                                 relative justify-center left-[100px]">
                Descubra o seu percentual de <br/> 
                <span className="relative left-[70px]">
                    gordura aqui! 
                </span>
               </Title>
            </div>
            
        </div>
       </div>
    )
}

export default AboutUs;