import { useState } from 'react'
import { motion } from 'motion/react'
import './App.css'
import { myApps } from './myApps';
import Header from './components/header';

export default function App() {
    const [page, setPage] = useState<string>("home");
    const currentApp = myApps.find(app => app.page === page);

    return (
        <div className='app-container'>
            {(page.match("home")) ?
                <div className='home-container'>
                    <h1 className='main-title'>Coupled</h1>
                    <h3>Apps made for couples</h3>
                    <motion.div 
                        className='main-menu'
                        initial={{x: -100}}
                        animate={{x: 0}}
                    >
                        {myApps.map((apps) => {
                            return (
                                <motion.a 
                                    className={page.match(apps.page) ? `menu-button ${apps.page} active` : `menu-button ${apps.page}`} 
                                    onClick={() => setPage(apps.page)}
                                    onTap={() => setPage(apps.page)}
                                    initial={{color: "rgba(24,24,24,1)"}}
                                    whileHover={{
                                        scale: 1.1, 
                                        cursor: "pointer", 
                                        color: "rgba(75,75,75,1)",
                                        boxShadow: "0px 0px 10px rgba(255,255,255,0.8)"
                                    }}>
                                    <h1>{apps.name}</h1>
                                </motion.a>
                            )
                        })}
                        
                    </motion.div>
                </div> : null }
            {currentApp && 
                <div className={`${currentApp.page}-container`}>
                    <Header pageName={currentApp.name} setPage={setPage}/>
                    <h3>{currentApp.desc}</h3>
                    <currentApp.component/>
                </div>
            }
        </div>
    )
}
