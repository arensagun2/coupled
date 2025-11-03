import { motion } from "motion/react";
import { useState, type FormEvent } from "react";

export default function IndecisivePage() {
    const [userItems, setUserItems] = useState<string>("");
    const [err, setErr] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const main = (e : FormEvent) => {
        e.preventDefault();
        const items = userItems.split(" ").filter((item => item != "")).map(item => item.trim());
        if (items.length < 2) return setErr("Error: Less than 2 items");
        const randI = Math.floor(Math.random() * items.length);
        setResult(items[randI]);
        setErr("");
    }

    return (
        <motion.div className="content indecisive"  >
            <p className="err">{err}</p>
            <form className="form-container" onSubmit={(e) => main(e)}>
                <input className="text-input" type="text" name="user-items" placeholder="thing1 thing2 thing3" onChange={(e) => setUserItems(e.target.value)} required />
                <motion.input className="submit-input" type="submit" whileHover={{scale: 1.1, cursor: "pointer"}}/>
            </form>
            <h1 className="text-result">{result}</h1>
        </motion.div>
    )
}