import React, { useState } from "react";
import MoneyAPI from '../API/MoneyAPI';
// import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
const Money = () => {
   const [MoneyData, setMoneyData] = useState(MoneyAPI);
   return (
      <>
         <section className="money-section cmnptb">
            <div className="container">
               <div className="row">
               {MoneyData.map((curElem) => {
                  const { id, logo, title, info } = curElem;
                  return (
                     <>
                        <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
                           <div className="money-inner">
                           {/* <ArrowCircleUpTwoToneIcon/> */}
                              <div className="money-icon">
                                 <a href="#"><i className={`${logo}`}></i></a>
                              </div>
                              <div className="money-head">
                                 <h5>{title}</h5>
                              </div>
                              <div className="money-desc">
                                 <p>{info}</p>                                 
                              </div>
                           </div>
                        </div>
                     </>
                  )
               })
               }
               </div>
            </div>
         </section>
      </>
   )
}
export default Money;
