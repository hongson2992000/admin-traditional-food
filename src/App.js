import './scss/App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/DashboardPage/Dashboard";
import ManageMenu from './pages/ManageMenuPage/ManageMenu';
import ManageFoodPage from './pages/ManageFoodPage/ManageFood';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='manageFood' element={<ManageFoodPage/>}/>
            <Route path='manageMenu' element={<ManageMenu/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
