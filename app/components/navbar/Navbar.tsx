import React from "react";
import Link from 'next/link';

const Navbar = () => {
 return (
  <nav style={navStyle}>
    <div style={leftStyle}>Navbar</div>
    <div style={rightStyle}>
    <Link href="/components/posts/AddPost">Add Post</Link>
    </div>
  </nav>
);
};

const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'lightblue',
};

const leftStyle: React.CSSProperties = {
    flex: 1,
};

const rightStyle: React.CSSProperties = {
    flex: 1,
    textAlign: 'right',
};

export default Navbar;
