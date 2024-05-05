import { useState } from "react";
import Class from "./Class";

export default function Rogue(){
    const[showComponent, setShowComponent] = useState(false);
    const toggleComponent = () =>{
        if(!showComponent){
            setShowComponent(true);
        }else setShowComponent(false);
    }

    const image ="../public/rogue.png";
    const link = "http://dnd5e.wikidot.com/rogue";
    const title = "Rougue";
    const text = "Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and    disarming traps, and opening locks. When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities."

    return (<>
        <button className="rogue_button" onClick={toggleComponent}>Rogue</button>
        {showComponent && <Class image={image} text={text} link={link} title={title}/>}
    </>)
}