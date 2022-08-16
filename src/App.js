import "./App.css";
import Home from "./Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Gowns" element={<LoanAppView />}></Route>
        <Route path="Polo" element={<Borrower />}></Route>
        <Route path="Tpcs" element={<BorrowerView />}></Route>
        {/* <Route path="Bags/:itemId" element={<ProductPagebag />}></Route>
        <Route path="Polo/:itemId" element={<ProductPagepolo />}></Route>
        <Route path="Gowns/:itemId" element={<ProductPage />}></Route>
        <Route path="Tpcs/:itemId" element={<ProductPage2pcs />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
