import { useState } from "react";
import Class from "./Class";

export default function Barbarian(){
    const[ShowComponent, setShowComponent] = useState(false);

    const TriggerShowComponent = () =>{
        if(!ShowComponent){
            setShowComponent(true)
        }else setShowComponent(false)
    }

    const image = "../public/barbarian.jpg"
    const text = "People of towns and cities take pride in how their civilized ways set them apart from animaIs, as if denying one's own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal naturekeen instincts, primaI physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt. "
    const link = "http://dnd5e.wikidot.com/barbarian"
    const title = "Barbarian"

    return (<>
    <br></br><button onClick={TriggerShowComponent}>Barbarian</button>
    {ShowComponent && <Class image={image} text={text} link={link} title={title}/>}
    </>)
}