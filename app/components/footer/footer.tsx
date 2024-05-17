import React from 'react';

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'black',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <span>© {new Date().getFullYear()} My Blog</span>
      </div>
      <div>
        <div>
          <span style={{ color: 'white', marginRight: '10px' }}>Contact: hajarmotayiq123gmail.com</span> 
        </div>
        <div>
          <span style={{ color: 'white', marginRight: '10px' }}>Name: Hajar EL MOTAYIQ</span> 
        </div>
        <div>
          <a href="https://www.linkedin.com/in/hajar-el-motayiq-9a2b162b1/" style={{ color: 'white', marginRight: '10px' }} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/hajar28elm" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
