import "./App.css";
import Header from "./components/Header"
import Main from "./components/Main";
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div>
    <Header name="Ana" color="purple" />
    <Main greet="Howdy"/>
    <Sidebar greet="Howdy"/>
    </div>
  )
}

export default App;
