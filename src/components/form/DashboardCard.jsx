import React, { useState } from "react";

import poupstyle from "./poup.module.css";
const DashboardCard = (props) => {
  let [count, setCount] = useState(0);
  let [popupflag,setpopup]=useState(false);
  let [kyc,setkyc]=useState(true);
  function popup() {
    setpopup(!popupflag);
    console.log("popup");
  }
  return (
    <>
    
      <div className={`${poupstyle.mainparent}`}>
      
        <div className={`row`}>
          <div className={`col-md-12 ${poupstyle.itemcard}`}>
            <div className={`row`}>
              <div className={`col-md-2 ${poupstyle.imagecont}`}>
                <img src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
              </div>
              <div className={`col-md-8 ${poupstyle.productdetail}`}>
                <h3>Product Detail</h3>
              </div>
              <div className={`col-md-2 ${poupstyle.counter}`}>
                <div className={`${poupstyle.counter}`}>
                  <div  onClick={()=>{count >0 && setCount(count-1)}} className={`${poupstyle.btn}`}>-</div>
                  <input   style={{width:'3rem',textAlign:"center"}}
                     value={count}
                      type="text" className={`${poupstyle.count}`}> 
                  </input>
                  <div  onClick={()=>{setCount(count+1)}} class={`${poupstyle.btn}`}>+</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{margin:"auto",height:'1rem'}} onChange={()=>setkyc(!kyc)} className={`col-md-2 ${poupstyle.checkbox}`}>
            <input type="checkbox"/><label style={{margin:"1rem"}}>KYC</label>

          </div>
          <div onClick={popup} className={`col-md-2 offset-10 ${poupstyle.buybut}`}>
            <button>Buy</button>

          </div>
        </div>
        {(kyc) && <div style={{color:'red'}}>KYC is not done</div>}
        {(popupflag && !kyc) && <div className={`${poupstyle.overlay}`}>
         <div className={`${poupstyle.popup_buy}`}>
        <div className="row">
          <div className="col-12" style={{color:'black'}}>
            <table>
            <tr>
                <th>Count:</th>
                <td>{count}</td>
              </tr><tr>
                <th>Cost:</th>
                <td>{count*100}</td>
              </tr><tr>
                <th colSpan={2}>Bank Details:</th>
              </tr>
              <tr>
                <th>ACCOUNT NAME:</th>
                <td>Alex Bob</td>
              </tr>
              <tr>
                <th>MOBILE NO:</th>
                <td>987654321</td>
              </tr>
              <tr>
                <th>IFSC CODE:</th>
                <td>456543456789</td>
              </tr>
              <tr>
                <th>TYPE OF ACCOUNT:</th>
                <td>Saving</td>
              </tr>
              <tr>
                <th>MICR CODE OF BANK:</th>
                <td>5433456644</td>
              </tr>
            </table>
            
            </div>
          <div  onClick={popup} className={`col-md-5 offset-6 ${poupstyle.okaybut}`}>
            <button>Okay</button>

          </div>
       
        </div>
      </div></div>}
      </div>
    
   </>
  );
};

export default DashboardCard;
