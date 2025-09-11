import { useState } from 'react'
import { motion } from 'motion/react'
import './App.css'
import IndecisivePage from './components/indecisive';

export default function App() {
    const [page, setPage] = useState<string>("home");

    return (
        <div className='app-container'>
            {(page.match("home")) ?
                <div className='home-container'>
                    <h1 className='main-title'>Coupled</h1>
                    <div className='main-menu'>
                        <motion.a 
                        className={page.match("home") ? 'menu-button home active' : "menu-button home"} 
                        onClick={() => setPage("home")}
                        onTap={() => setPage("home")}
                        initial={{color: "rgba(24,24,24,1)"}}
                        whileHover={{
                            scale: 1.1, 
                            cursor: "pointer", 
                            color: "rgba(75,75,75,1)",
                            boxShadow: "0px 0px 10px rgba(0,255,0,0.8)"
                            }}>
                            <h1>Home</h1>
                        </motion.a>
                        <motion.a 
                        className={page.match("indecisive") ? 'menu-button indecisive active' : "menu-button indecisive"} 
                        onClick={() => setPage("indecisive")}
                        onTap={() => setPage("indecisive")}
                        initial={{color: "rgba(24,24,24,1)"}}
                        whileHover={{
                            scale: 1.1, 
                            cursor: "pointer", 
                            color: "rgba(75,75,75,1)",
                            boxShadow: "0px 0px 10px rgba(255,255,255,0.8)"
                            }}>
                            <h1>Indecisive</h1>
                        </motion.a>
                    </div>
                </div> : null }
            {page.match("indecisive") ? <IndecisivePage setPage={setPage} /> : null}
        </div>
    )
}
