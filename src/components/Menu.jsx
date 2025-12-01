import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Menu() {
    const navigate = useNavigate();

    const onClickInitial = () => {
        navigate('/');
    }
    const onClick = () => {
        alert('Em breve!');
    }
    function onSeeBfTableClick() {
    navigate('/TabelasBf');
  }
    function onSeeMeasuresClick() {
        navigate('/Medidas')
    }

    return (
        <motion.div className="flex items-center justify-center  mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <ul className="flex gap-[208px] text-white font-semibold mt-8">
                <li onClick={onClickInitial}>Inicio</li>
                <li onClick={onSeeBfTableClick}>Tabela de BF</li>
                <li onClick={onSeeMeasuresClick}>Como medir?</li>
                <li onClick={onClick}>Sobre</li>
            </ul>
        </motion.div>
    );
}

export default Menu;