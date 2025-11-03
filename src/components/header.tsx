import { faHome } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import type { ComponentState } from "react";

import "../styles/header.css";

interface props {
    setPage: ComponentState;
    pageName: string
}

export default function Header({ setPage, pageName } : props) {
    return (
        <div className="header">
            <motion.a 
                className='home' 
                onClick={() => setPage("home")}
                onTap={() => setPage("home")}
                whileHover={{
                    scale: 1.1, 
                    cursor: "pointer",
                }}>
                <FontAwesomeIcon icon={faHome} color="white" size="2x" />
            </motion.a>
            <motion.h1 
                className='main-title'
            >{pageName}</motion.h1>
        </div>
    )
}