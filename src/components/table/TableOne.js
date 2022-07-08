import React from "react";

const TableOne = () => {
  return (
    <div className="row no-gutters">
    
          <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Investment Category</th>
                <th scope="col">Avg IRR</th>
                <th scope="col">Risk Level</th>
                <th scope="col">Potential Risk</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Fixed Deposits</th>
                <td>5%</td>
                <td>Low</td>
                <td>Nil unless Bank Defaults</td>
                </tr>
                <tr>
                <th scope="row">Corporate FDs</th>
                <td>7.2%</td>
                <td>Low</td>
                <td rowspan="2">Corporate Default</td>
                </tr>
                <tr>
                <th scope="row">Non-convertible Debentures</th>
                <td>9.2%</td>
                <td>Low</td>
                {/* <td>@mdo</td> */}
                </tr>
                <tr>
                <th scope="row">REITs & Pre-leased Properties</th>
                <td>9%</td>
                <td>Moderate</td>
                <td><p>1. Property Market Slump and lack of demand</p> <p>2. Vacancy Loss leading to inconsistent returns</p></td>
                </tr>
                <tr>
                <th scope="row">Govt bonds</th>
                <td>7.4%</td>
                <td>Low</td>
                <td>Nil (as backed by government)</td>
                </tr>
                <tr>
                <th scope="row">Livania Solar Park</th>
                <td>10%</td>
                <td>Low</td>
                <td>Nil (as backed by Power Purchase Agreements and Panels are insured)</td>
                </tr>
            </tbody>
          </table>
    </div>
  );
};

export default TableOne;
