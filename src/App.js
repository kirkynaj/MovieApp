import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";

const App = () => {
  
  return (
   <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>} />
    </Route>
   </Routes>
  );
}

export default App;
