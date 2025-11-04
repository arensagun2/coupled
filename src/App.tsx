// Main App Component
// Handles navigation between different apps for couples
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
                    <Header pageName={"Home"} setPage={setPage} />
                    <h1>Personal Apps made for Couples</h1>
                    <p>by arensagun2</p>
                    <div className="w-48 hover:scale-105 transition-all">
                        <a href='https://ko-fi.com/T6T8UYMEE' target='_blank' rel="noreferrer"><img height='36' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' alt='Buy Me a Coffee at ko-fi.com' /></a>
                    </div>
                    <motion.div
                        className='main-menu'
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                    >
                        {myApps.map((apps) => {
                            return (
                                <motion.a
                                    className={page.match(apps.page) ? `menu-button ${apps.page} active` : `menu-button ${apps.page}`}
                                    onClick={() => setPage(apps.page)}
                                    onTap={() => setPage(apps.page)}
                                    initial={{ color: "rgba(24,24,24,1)" }}
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
                </div> : null}
            {currentApp &&
                <div className={`${currentApp.page}-container`}>
                    <Header pageName={currentApp.name} setPage={setPage} />
                    <h2>{currentApp.desc}</h2>
                    <currentApp.component />
                </div>
            }
        </div>
    )
}
