import { useState } from "react"
import Class from "./Class"

export default function Bard(){
    const[showComponent, setShowComponent] = useState(false);
    
    const toggleComponent = () => {
        if(!showComponent){
            setShowComponent(true);
        }else setShowComponent(false);
    }

    const image = "../public/bard.jpg"
    const text = "The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes fram a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armar. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge."
    const title = "Bard"
    const link = "http://dnd5e.wikidot.com/bard"

    return(
        <>
        <br/><button onClick={toggleComponent}>Bard</button>
        {showComponent && <Class image={image} text={text} title={title} link={link}/>}
        </>
    )
}