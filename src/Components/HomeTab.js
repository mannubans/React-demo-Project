import React from 'react';
// import { makeStyles } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import {Tab,Tabs} from '@material-ui/core';
// const useStyles = makeStyles({
//     btn: {
//       color: 'white',
//       fontSize:'100px',
//     },
//   });
const HomeTab = () => {
// const muicss = useStyles();
  const[value,setValue] = React.useState(0);
  const handleTabs=(e,val)=>{
    console.log(val)
    setValue(val)
  }
  return <>
        <section className="tab">
            <div className="container">
                <div class="row">
                    <Tabs value={value} onChange={handleTabs}>
                        <Tab label="Item 1" />
                        <Tab label="Item 2" />
                        <Tab label="Item 3"  />
                    </Tabs>
                </div>
            </div>
        </section>
        <TabPanel value={value} index={0}>
            <section className="tabcontent">
                <div className="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h5>Title 1:- Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h5>
                            <p className="">Description :- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. <br /><br />Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum <br /><br />Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div class="col-lg-6">
                            <div className="sclimg-item">
                                <img src="images/event-private.jpg" alt="" class="img-fluid" />
                            </div>                            
                        </div>                        
                    </div>
                </div>
            </section>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <section className="tabcontent">
                <div className="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h5>Title 2:- Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h5>
                            <p className="">Description :- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. <br /><br />Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum <br /><br />Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 text-center">
                            <div className="sclimg-item">
                                <img src="images/event-birthday.jpg" alt="" class="img-fluid" />
                            </div>                 
                        </div>
                    </div>
                </div>
            </section>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <section className="tabcontent">
                <div className="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h5>Title 3:- Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h5>
                            <p className="">Description :- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. <br /><br />Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum <br /><br />Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div class="col-lg-6 oWrder-1 order-lg-2 text-center">
                            <div className="sclimg-item">
                                <img src="images/event-custom.jpg" alt="" class="img-fluid" />
                            </div>                               
                        </div>
                    </div>
                </div>
            </section>
        </TabPanel>
  </>;
};
const TabPanel=(props)=>{ 
  const{children,value,index} = props;
  return <>
  {
    value==index && (<section className='cmnptb'>{children}</section>)
  }
</>;
} 
export default HomeTab;
{/* <Button className="muicss.btn">Custom CSS on material btn </Button> */}