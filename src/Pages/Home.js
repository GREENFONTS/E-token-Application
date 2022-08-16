import React from "react";
import Data from "./LoanData";

const Home = () => {
  const [info, setInfo] = useState(Data);
  return (
    <section>
      <header className="header">
        <div className="header-cont">
          <img src={image1} alt="logo"></img>
          <p>Central Bank Of Nigeria</p>
        </div>
      </header>
      <div className="main-cont">
        <div className="dash-cont">
          <div>
            <img src={image2} alt="logo"></img>
            <p>Dashboard</p>
          </div>
          <div>
            <p>Loan applcation dashboard</p>
          </div>
        </div>
        <div className="dash-header">
          <div>
            <p>Individual</p>
          </div>
          <div>
            <p>Coperate</p>
          </div>
          <div>
            <p>SME's and Startups</p>
          </div>
        </div>
        <div className="table">
          <div>
            <p>Name</p>
          </div>
          <div>
            <p>Amount</p>
          </div>
          <div>
            <p>Term</p>
          </div>
          <div>
            <p>Interest Rate</p>
          </div>
          <div>
            <p>Rate type</p>
          </div>
          <div>
            <p>Amount Payable</p>
          </div>
        </div>
        <div className="">
          <LoanAppList info={info} />
        </div>
      </div>
    </section>
  );
};

export default Home;
