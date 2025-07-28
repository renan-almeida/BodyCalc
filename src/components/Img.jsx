import {motion} from "framer-motion";
function Img(props) {
    return (
        <motion.img
            src={props.src}
            alt={props.alt}
            className={props.className}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        />
    );
}

export default Img;