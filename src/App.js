import {Routes, Route, Navigate} from "react-router";
import {Home} from "./Home";
import { Lists } from "./Lists";
import { Results } from "./Results";
import "./App.css";
import { Overview } from "./Overview";
function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>}>
        <Route path="lists" element={<Lists/>}/>
        <Route path="results/:key" element={<Results/>}/>
        <Route path="*" element={<Navigate replace to = "/lists"/>}/>
      </Route>
      <Route path="*" element={<Navigate replace to = "/lists"/>}/>
    </Routes>
  );
}

export default App;
