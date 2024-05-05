import './App.css'
import Paladin from './Paladin.jsx'
import Warlock from './Warlock.jsx'
import Rogue from './Rogue.jsx'
import Barbarian from './Barbarian.jsx'

function App() {
  return (
    <>
    <img id="dnd_logo" src="../public/dnd.jpg"/>
      <h1>Dungeons and Dragons Classes</h1>
      <Paladin/>
      <Warlock/>
      <Rogue/>
      <Barbarian/>
    </>
  )
}
export default App
