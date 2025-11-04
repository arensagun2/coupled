import { motion } from "motion/react";
import { useState, type FormEvent } from "react";

import "../styles/myapps.css" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

export default function IndecisivePage() {
    const [userItems, setUserItems] = useState<string[]>([]);
    const [option, setOption] = useState("")
    const [err, setErr] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const handleAddOption = (e: FormEvent) => {
        e.preventDefault();

        const trimmedOption = option.trim();
        if (!trimmedOption) {
            setErr("Error: Option cannot be empty.");
            return;
        }

        setUserItems(prevItems => [...prevItems, trimmedOption]);

        setOption("");
        setErr("");
    }

    const pickRandomOption = () => {
        if (userItems.length < 2) {
            setResult("");
            setErr("Error: Add at least 2 items to choose from.");
            return;
        }
        setErr(""); // Clear any previous errors

        const randI = Math.floor(Math.random() * userItems.length);
        setResult(userItems[randI]);
    }

    const handleRemoveOption = (indexToRemove: number) => {
        const newItems = userItems.filter((_, index) => index !== indexToRemove);
        
        setUserItems(newItems);

        if (result && result === userItems[indexToRemove]) {
            setResult("");
        }
        
        if (newItems.length < 1) {
             setErr("");
        }
    }

    return (
        <motion.div className="content indecisive"  >
            <p className="err">{err}</p>
            <h2>Your Options</h2>
            <div className="all-options">
                { userItems.length > 0 ? userItems.map((item, index) => {
                    return (
                        <div key={index} className="option" style={{}}>
                            <h3>{item}</h3>
                            <motion.button
                                onClick={() => handleRemoveOption(index)} 
                                whileHover={{scale: 1.1, cursor: "pointer"}}
                                className="del-button"
                                style={{  }}
                            >
                                <FontAwesomeIcon icon={faRemove}/>
                            </motion.button>
                        </div>
                    )
                }) : "None" }
            </div>
            <form className="form-container" onSubmit={handleAddOption}> 
                <input 
                    className="text-input" 
                    type="text" 
                    name="user-items" 
                    value={option} 
                    onChange={(e) => setOption(e.currentTarget.value)} 
                    placeholder="Option" 
                    required />
                <motion.input 
                    className="submit-input" 
                    type="submit" 
                    value={"Add"} 
                    whileHover={{scale: 1.1, cursor: "pointer"}}
                />
            </form>
            <motion.button 
                onClick={pickRandomOption} 
                whileHover={{scale: 1.1, cursor: "pointer"}} 
                className="submit-input"
                >
                Decide For Me!
            </motion.button>
            <h1 className="text-result">{result}</h1>
        </motion.div>
    )
}