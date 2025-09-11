import { motion } from "motion/react";
import { useState, type ComponentState, type FormEvent } from "react";

interface props {
    setPage: ComponentState;
}

export default function IndecisivePage({setPage} : props) {
    const [userItems, setUserItems] = useState<string>("");
    const [err, setErr] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const main = (e : FormEvent) => {
        e.preventDefault();
        const items = userItems.split(" ");
        if (items.length < 2) return setErr("Error: Less than 2 items");

        const randI = Math.floor(Math.random() * items.length);
        setResult(items[randI]);
        setErr("");
    }

    return (
        <div className='indecisive-container'>
            <div className="header">
                <h1 className='main-title'>Indecisive</h1>
                <motion.a 
                className='menu-button home' 
                onClick={() => setPage("home")}
                onTap={() => setPage("home")}
                initial={{color: "rgba(24,24,24,1)"}}
                whileHover={{
                    scale: 1.1, 
                    cursor: "pointer", 
                    color: "rgba(75,75,75,1)",
                    boxShadow: "0px 0px 10px rgba(255,255,255,0.8)"
                    }}>
                    <h1>Home</h1>
                </motion.a>
            </div>
            <div className="content">
                <p className="err">{err}</p>
                <form className="form-container" onSubmit={(e) => main(e)}>
                    <input className="text-input" type="text" name="user-items" placeholder="thing1 thing2 thing3" onChange={(e) => setUserItems(e.target.value)} required />
                    <motion.input className="submit-input" type="submit" whileHover={{scale: 1.1, cursor: "pointer"}}/>
                </form>
                <h1 className="text-result">{result}</h1>
            </div>
        </div>
    )
}