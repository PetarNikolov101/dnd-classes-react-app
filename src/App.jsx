import './App.css'
import Paladin from './Paladin.jsx'
import Warlock from './Warlock.jsx'
import Rogue from './Rogue.jsx'
import Barbarian from './Barbarian.jsx'
import Bard from './Bard.jsx'

function App() {
  return (
    <>
    <img id="dnd_logo" src="../public/dnd.jpg"/>
      <h1>Dungeons and Dragons Classes</h1>
      <Paladin/>
      <Warlock/>
      <Rogue/>
      <Barbarian/>
      <Bard/>
    </>
  )
}
export default App
