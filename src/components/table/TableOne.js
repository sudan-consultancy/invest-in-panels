import React, { useEffect, useState } from "react";

export const TableTwo = () => {
  return (
    <div className="row no-gutters">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Investment Category</th>
            <th scope="col">Average IRR</th>
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
            <td rowSpan="2">Corporate Default</td>
          </tr>
          <tr>
            <th scope="row">Non-convertible Debentures</th>
            <td>9.2%</td>
            <td>Low</td>
            {/* <td>@mdo</td> */}
          </tr>
          <tr>
            <th scope="row">REITs &amp; Pre-leased Properties</th>
            <td>9%</td>
            <td>Moderate</td>
            <td>
              <p>1. Property Market Slump and lack of demand</p>{" "}
              <p>2. Vacancy Loss leading to inconsistent returns</p>
            </td>
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
            <td>
              Nil (as backed by Power Purchase Agreements and Panels are
              insured)
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
};

export const TableOne = () => {
  const [init, setInit] = useState(27000);
  const [yearOne, setYearOne] = useState({
    rinc: 0,
    dr: 0,
    tloss: 0,
    tsave: 0,
    rtot: 0,
    crov: 0,
  });
  const [yearTwo, setYearTwo] = useState({
    rinc: 0,
    dr: 0,
    tloss: 0,
    tsave: 0,
    rtot: 0,
    crov: 0,
  });
  const [yearThree, setYearThree] = useState({
    rinc: 0,
    dr: 0,
    tloss: 0,
    tsave: 0,
    rtot: 0,
    crov: 0,
  });

  useEffect(() => {
    calculation({ target: { value: 1 } });
  }, []);

  const calculation = (e) => {
    let count = e.target.value;
    const panelCost = 27000;
    const yearOne = count * panelCost;
    setInit(yearOne);
    const rentPerUnit = 3.8;
    const unitsPerPanel = 810;
    const depreciationRate = 0.4;
    const taxRate = 0.3;

    let cummulativeRecovery = 0;
    for (
      let i = 1, initialValue = panelCost * count;
      i <= 3;
      i++, initialValue = initialValue - initialValue * depreciationRate
    ) {
      let yearDepreciationValue = initialValue * depreciationRate;
      // let yearDepreciatedRate = initialValue - yearDepreciationValue;
      let returnIncome = count * rentPerUnit * unitsPerPanel;
      let taxLoss = Math.abs(returnIncome - yearDepreciationValue);
      let taxSaving = taxRate * taxLoss;
      let returnTotal = returnIncome + taxSaving;
      cummulativeRecovery += (returnTotal / yearOne) * 100;
      let data = {
        rinc: returnIncome.toFixed(0),
        dr: yearDepreciationValue.toFixed(0),
        tloss: taxLoss.toFixed(0),
        tsave: taxSaving.toFixed(0),
        rtot: returnTotal.toFixed(0),
        crov: cummulativeRecovery.toFixed(2),
      };
      if (i === 1) setYearOne(data);
      else if (i === 2) setYearTwo(data);
      else setYearThree(data);
    }
  };

  return (
    <div className="row no-gutters">
      <input
        defaultValue="1"
        step="0"
        type="range"
        min="1"
        max="1900"
        style={{ width: "100%" }}
        onChange={calculation}
      />

      <table className="table table-bordered">
        <thead>
          <th>Intial Investment: {init}</th>
          <th>Year 1</th>
          <th>Year 2</th>
          <th>Year 3</th>
        </thead>
        <tbody>
          <tr>
            <td>Estimated Rental Income</td>
            <td>{yearOne.rinc}</td>
            <td>{yearTwo.rinc}</td>
            <td>{yearThree.rinc}</td>
          </tr>
          <tr>
            <td>WDV depreciation u/s32 of Income Tax Act</td>
            <td>{yearOne.dr}</td>
            <td>{yearTwo.dr}</td>
            <td>{yearThree.dr}</td>
          </tr>
          <tr>
            <td>Tax loss available for set off</td>
            <td>{yearOne.tloss}</td>
            <td>{yearTwo.tloss}</td>
            <td>{yearThree.tloss}</td>
          </tr>
          <tr>
            <td>Tax saved on account of above set off</td>
            <td>{yearOne.tsave}</td>
            <td>{yearTwo.tsave}</td>
            <td>{yearThree.tsave}</td>
          </tr>
          <tr>
            <td>Total return</td>
            <td>{yearOne.rtot}</td>
            <td>{yearTwo.rtot}</td>
            <td>{yearThree.rtot}</td>
          </tr>
          <tr>
            <td>Cumulative recovery of cost</td>
            <td>{yearOne.crov}</td>
            <td>{yearTwo.crov}</td>
            <td>{yearThree.crov}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
