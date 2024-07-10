import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white w-[100%]">
      <div className="w-[90%] p-4 mx-auto my-0">
        <h1 className="text-slate-700 font-bold text-xl ">
          <Link to="/">RentCar</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
