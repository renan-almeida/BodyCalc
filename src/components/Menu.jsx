import { motion } from "framer-motion";
function Menu() {
    return (
        <motion.div className="flex items-center justify-center  mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <ul className="flex gap-[208px] text-white font-semibold mt-8">
                <li>Inicio</li>
                <li>Tabela de BF</li>
                <li>Como medir?</li>
                <li>Sobre</li>
            </ul>
        </motion.div>
    );
}

export default Menu;