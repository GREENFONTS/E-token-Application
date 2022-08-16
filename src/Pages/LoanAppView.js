import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from "./LoanData";

const LoanAppView = () => {
  const { itemId } = useParams();
  const product = Data.find((product) => product.id === itemId);
  const { id, name, amount, term, intrestRate, rateType, amountPayable } =
    product;

  return (
    <section>
      <div>
        <p>{name}</p>
      </div>
    </section>
  );
};

export default LoanAppView;
