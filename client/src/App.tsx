import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CoverPage from "./pages/CoverPage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/tasks" element={<MyTask />} />
          <Route path="/new" element={<NewTask />} />
          <Route path="/edit" element={<EditTask />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
