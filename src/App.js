import './App.css';
import HomePage from "./pages/Home/HomePage";
import AdminPage from "./pages/Admin/AdminPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}>
        </Route>
        <Route path='/Admin' element={<AdminPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
