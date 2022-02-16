import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add'
// import Button from '@material-ui/core/Button';

const ScrollTop = () => {
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 200){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 200){
        setShowScroll(false)
      }
    };
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
    window.addEventListener('scroll', checkScrollTop)
    return <>
    <div className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}>
        <i class="fas fa-arrow-circle-up"></i>
        {/* <Button variant="contained">Hello World</Button> */}
        {/* <AddIcon /> */}
    </div>      
    </>;
};
export default ScrollTop;