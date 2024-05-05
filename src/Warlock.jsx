import { useState } from 'react'
import Class from "./Class";

export default function Warlock(){
    const[showComponent, setShowComponent] = useState(false);
    const handleClick = ()=>{
        if(!showComponent){
            setShowComponent(true)
        }else setShowComponent(false)
    }

    const image ="../public/warlock.jpg";
    const link = "http://dnd5e.wikidot.com/warlock";
    const title = "Warlock";
    const text = "A warlock is defined by a pact with an otherworldly being, Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods, A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity-beings not typically served by c1erics, More often, though, the arrangement is similar to that between a master and an apprentice, The warlock learns and grows in power, at the cost of occasional services performed on the patron's behalf. The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock's being (such as the ability to see in darkness or to read any language) to access to powerful spells, Unlike bookish wizards, warlocks supplement their magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple weapons."
    return (
    <>
        <div>
            <button id="warlock_button" onClick={handleClick}>Warlock</button><br/>
            {showComponent && <Class image={image} text={text} link={link} title={title}/>}
        </div>
    </>)
}