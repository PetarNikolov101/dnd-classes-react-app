import { useState } from 'react'
import Class from "./Class";

export default function Paladin(){
    const[showComponent, setShowComponent] = useState(false);
    const handleClick = () =>{
      if(!showComponent){
        setShowComponent(true);
      }else setShowComponent(false);
    }

    const image ="../public/Paladin.jpg";
    const link = "http://dnd5e.wikidot.com/paladin";
    const title = "Paladin";
    const text = "A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin's power comes as much from a commitment to justice itself as it does from a god. Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight forjustice."
    
    return (
        <>
          <button id="paladin_button" onClick={handleClick}>Paladin</button><br/>
          {showComponent && <Class image={image} link ={link} title={title} text={text}/>}
        </>
      )
}


