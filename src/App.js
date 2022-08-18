// import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoanAppDashboard from "./Pages/LoanAppDashboard";
import BorrowersDashboard from "./Pages/Borrowers";
import CustomerDashBoard from "./Pages/CustomerDashboard";
import Register from "./Pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Loans" element={<LoanAppDashboard />}></Route>
        <Route path="/Borrowers" element={<BorrowersDashboard />}></Route> 
       <Route path="/Customer" element={<CustomerDashBoard />}></Route>
         <Route path="/SignUp" element={<Register />}></Route>
        {/* <Route path="Gowns/:itemId" element={<ProductPage />}></Route>
        <Route path="Tpcs/:itemId" element={<ProductPage2pcs />}></Route>  */}
    </Routes>
  );
};

export default App;
