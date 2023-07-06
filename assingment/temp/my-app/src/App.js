import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div>
      <TodoApp />
      {/* <BrowserRouter>
        <Routes>
          
        
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
