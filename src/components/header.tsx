import { motion } from "motion/react";
import type { ComponentState } from "react";

interface props {
    setPage: ComponentState;
    pageName: string
}

export default function Header({ setPage, pageName } : props) {
    return (
        <div className="header">
            <motion.h1 
                className='main-title'
                initial={{x: -100}}
                animate={{x:0}}
            >{pageName}</motion.h1>
            <motion.a 
                className='home' 
                onClick={() => setPage("home")}
                onTap={() => setPage("home")}
                initial={{color: "rgba(24,24,24,1)", x: 100}}
                animate={{x:0}}
                whileHover={{
                    scale: 1.1, 
                    cursor: "pointer", 
                    color: "rgba(75,75,75,1)",
                    boxShadow: "0px 0px 10px rgba(255,255,255,0.8)"
                }}>
                <h1>Home</h1>
            </motion.a>
        </div>
    )
}