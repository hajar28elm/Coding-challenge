import React from "react";

const Navbar = () => {
    return (
        <nav style={navStyle}>
            <div style={leftStyle}>Navbar</div>
            <div style={rightStyle}><a href="/pages/api/posts">Add Post</a></div>
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
