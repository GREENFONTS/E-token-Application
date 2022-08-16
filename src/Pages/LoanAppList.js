import React from "react";
import { Link } from "react-router-dom";

function LoanAppList({ info }) {
  return (
    <div className="flexing">
      {info.map((info) => {
        // const fid = info.id;
        // const product = info.find((product) => product.id === itemId);

        const { id, name, amount, term, intrestRate, rateType, amountPayable } =
          info;
        return (
          <article key={id}>
            <div id="disp" className="list-disp">
              <p>{name}</p>
              <p>{amount}</p>
              <p>{term}</p>
              <p>{intrestRate}</p>
              <p>{rateType}</p>
              <p>{amountPayable}</p>
              <Link className="view" to={`/${id}`}>
                view
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default LoanAppList;
