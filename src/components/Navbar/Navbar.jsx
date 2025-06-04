import React from 'react';
import GooeyNav from "../../../ReactBits/GooeyNav/GooeyNav"
import "./Navbar.css";

const items = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => (
  <nav className="bg-black text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-md relative ">
    <h1 className="text-2xl font-bold mb-4 md:mb-0">MERN Developer</h1>
    <div className="relative " style={{ height: '50px', width: '100%' }}>
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  </nav>
);

export default Navbar;
