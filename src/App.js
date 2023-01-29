import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/DashboardPage/Dashboard";
import ManageMenu from "./pages/ManageMenuPage/ManageMenu";
import ManageFoodPage from "./pages/ManageFoodPage/ManageFood";
import ManageCustomer from "./pages/ManageCustomer/ManageCustomer";
import ManageStaff from "./pages/ManageStaff/ManageStaff";
import LoginPage from "./pages/LoginPage/LoginPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="manageFood" element={<ManageFoodPage />} />
            <Route path="manageMenu" element={<ManageMenu />} />
            <Route path="manageCustomer" element={<ManageCustomer />} />
            <Route path="manageStaff" element={<ManageStaff />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
