import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <div className="navbar bg-slate-400 ">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div className="dropdown">
        <button className="dropbtn">Recipes</button>
        <div className="dropdown-content">
          <Link href="/recipes">Browse Recipes</Link>
          <Link href="/editRecipe">Edit existing</Link>
          <Link href="/addRecipe/:id">Create and add</Link>
        </div>
      </div>
      <Link href="/Contact">Contact</Link>
  
    </div>
  );
};

export default Navbar;
