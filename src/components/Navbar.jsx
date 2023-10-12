import React from "react"

const Navbar = () => { 
  return (
    <>
      <div className=" shadow-md w-100% mx-5 h-15 pt-1 py-2 box-border block boder-2 rounded-sm shadow-2x1 w-140  ">
        <div className="md:px-13 py-1 px-7">
          <div >
            {/* import logo image */}
          <img className="h-8 " src={require('./images/alma.png')} alt="down" />  
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

